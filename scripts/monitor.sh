#!/bin/bash

# OneCloset Server Monitoring Script
# This script monitors the server health and performance

set -e

# Configuration
SERVER_URL="http://localhost:3000"
HEALTH_ENDPOINT="$SERVER_URL/api/health"
LOG_FILE="server-monitor.log"
CHECK_INTERVAL=30  # seconds

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

# Error logging function
log_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_FILE"
}

# Success logging function
log_success() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1" | tee -a "$LOG_FILE"
}

# Warning logging function
log_warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a "$LOG_FILE"
}

# Check if server is running
check_server_status() {
    local response_code
    local response_time
    
    # Check if process is running
    if ! pgrep -f "next-server" > /dev/null; then
        log_error "Next.js server process not found"
        return 1
    fi
    
    # Check HTTP response
    response_time=$(curl -s -o /dev/null -w "%{time_total}" "$SERVER_URL" 2>/dev/null || echo "999")
    response_code=$(curl -s -o /dev/null -w "%{http_code}" "$SERVER_URL" 2>/dev/null || echo "000")
    
    if [ "$response_code" = "000" ]; then
        log_error "Server not responding (HTTP 000)"
        return 1
    fi
    
    if [ "$response_code" -ge 500 ]; then
        log_error "Server error (HTTP $response_code)"
        return 1
    fi
    
    if [ "$response_code" -ge 400 ]; then
        log_warning "Client error (HTTP $response_code)"
        return 0
    fi
    
    log_success "Server responding (HTTP $response_code, ${response_time}s)"
    return 0
}

# Check health endpoint
check_health_endpoint() {
    local health_response
    local health_status
    
    health_response=$(curl -s "$HEALTH_ENDPOINT" 2>/dev/null || echo '{"status":"unhealthy"}')
    health_status=$(echo "$health_response" | grep -o '"status":"[^"]*"' | cut -d'"' -f4)
    
    if [ "$health_status" = "healthy" ]; then
        log_success "Health check passed"
        return 0
    else
        log_error "Health check failed: $health_status"
        return 1
    fi
}

# Check memory usage
check_memory_usage() {
    local memory_usage
    local memory_limit=512  # MB
    
    if command -v ps > /dev/null; then
        memory_usage=$(ps -o rss= -p $(pgrep -f "next-server" | head -1) 2>/dev/null || echo "0")
        memory_usage=$((memory_usage / 1024))  # Convert to MB
        
        if [ "$memory_usage" -gt "$memory_limit" ]; then
            log_warning "High memory usage: ${memory_usage}MB"
        else
            log_success "Memory usage: ${memory_usage}MB"
        fi
    fi
}

# Check disk space
check_disk_space() {
    local disk_usage
    local disk_limit=90  # percentage
    
    disk_usage=$(df . | tail -1 | awk '{print $5}' | sed 's/%//')
    
    if [ "$disk_usage" -gt "$disk_limit" ]; then
        log_warning "High disk usage: ${disk_usage}%"
    else
        log_success "Disk usage: ${disk_usage}%"
    fi
}

# Check port availability
check_port() {
    if lsof -i :3000 > /dev/null 2>&1; then
        log_success "Port 3000 is active"
        return 0
    else
        log_error "Port 3000 is not active"
        return 1
    fi
}

# Main monitoring function
monitor_server() {
    log "Starting server monitoring..."
    
    while true; do
        log "=== Server Health Check ==="
        
        # Check port
        check_port
        
        # Check server status
        if check_server_status; then
            # Check health endpoint
            check_health_endpoint
            
            # Check memory usage
            check_memory_usage
            
            # Check disk space
            check_disk_space
        else
            log_error "Server is not healthy"
        fi
        
        log "=== End Health Check ==="
        log "Waiting ${CHECK_INTERVAL} seconds before next check..."
        echo ""
        
        sleep "$CHECK_INTERVAL"
    done
}

# Show server logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        tail -f "$LOG_FILE"
    else
        log_error "Log file not found: $LOG_FILE"
    fi
}

# Show server status
show_status() {
    log "=== Server Status ==="
    
    # Check if server is running
    if pgrep -f "next-server" > /dev/null; then
        local pid=$(pgrep -f "next-server")
        log_success "Server is running (PID: $pid)"
    else
        log_error "Server is not running"
    fi
    
    # Check port
    check_port
    
    # Check HTTP response
    local response_code=$(curl -s -o /dev/null -w "%{http_code}" "$SERVER_URL" 2>/dev/null || echo "000")
    log "HTTP Response Code: $response_code"
    
    # Check health endpoint
    local health_response=$(curl -s "$HEALTH_ENDPOINT" 2>/dev/null || echo '{"status":"unhealthy"}')
    local health_status=$(echo "$health_response" | grep -o '"status":"[^"]*"' | cut -d'"' -f4)
    log "Health Status: $health_status"
}

# Main script logic
case "${1:-monitor}" in
    "monitor")
        monitor_server
        ;;
    "status")
        show_status
        ;;
    "logs")
        show_logs
        ;;
    "health")
        check_health_endpoint
        ;;
    *)
        echo "Usage: $0 {monitor|status|logs|health}"
        echo "  monitor - Start continuous monitoring"
        echo "  status  - Show current server status"
        echo "  logs    - Show server logs"
        echo "  health  - Check health endpoint"
        exit 1
        ;;
esac
