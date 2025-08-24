type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  data?: any
  error?: Error
  context?: string
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'
  private isDebug = process.env.DEBUG === '*'

  private formatLog(entry: LogEntry): string {
    const { timestamp, level, message, data, error, context } = entry
    let logMessage = `[${timestamp}] ${level.toUpperCase()}`
    
    if (context) {
      logMessage += ` [${context}]`
    }
    
    logMessage += `: ${message}`
    
    if (data) {
      logMessage += ` | Data: ${JSON.stringify(data)}`
    }
    
    if (error) {
      logMessage += ` | Error: ${error.message}`
      if (this.isDevelopment) {
        logMessage += `\nStack: ${error.stack}`
      }
    }
    
    return logMessage
  }

  private log(level: LogLevel, message: string, data?: any, error?: Error, context?: string) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      error,
      context,
    }

    const formattedLog = this.formatLog(entry)

    // Console output
    switch (level) {
      case 'debug':
        if (this.isDebug) {
          console.debug(formattedLog)
        }
        break
      case 'info':
        console.info(formattedLog)
        break
      case 'warn':
        console.warn(formattedLog)
        break
      case 'error':
        console.error(formattedLog)
        break
    }

    // In production, you might want to send logs to a service like Sentry, LogRocket, etc.
    if (!this.isDevelopment && level === 'error') {
      // Example: send to error tracking service
      // this.sendToErrorService(entry)
    }
  }

  debug(message: string, data?: any, context?: string) {
    this.log('debug', message, data, undefined, context)
  }

  info(message: string, data?: any, context?: string) {
    this.log('info', message, data, undefined, context)
  }

  warn(message: string, data?: any, context?: string) {
    this.log('warn', message, data, undefined, context)
  }

  error(message: string, error?: Error, data?: any, context?: string) {
    this.log('error', message, data, error, context)
  }

  // API request logging
  logRequest(method: string, url: string, statusCode: number, responseTime: number) {
    const level = statusCode >= 400 ? 'error' : statusCode >= 300 ? 'warn' : 'info'
    this.log(level, `${method} ${url}`, { statusCode, responseTime }, undefined, 'API')
  }

  // Database operation logging
  logDatabase(operation: string, table: string, duration: number, error?: Error) {
    const level = error ? 'error' : 'info'
    this.log(level, `DB ${operation} on ${table}`, { duration }, error, 'Database')
  }

  // Performance logging
  logPerformance(operation: string, duration: number, context?: string) {
    const level = duration > 1000 ? 'warn' : 'info'
    this.log(level, `Performance: ${operation}`, { duration }, undefined, context || 'Performance')
  }
}

export const logger = new Logger()

// Convenience functions
export const logDebug = (message: string, data?: any, context?: string) => 
  logger.debug(message, data, context)

export const logInfo = (message: string, data?: any, context?: string) => 
  logger.info(message, data, context)

export const logWarn = (message: string, data?: any, context?: string) => 
  logger.warn(message, data, context)

export const logError = (message: string, error?: Error, data?: any, context?: string) => 
  logger.error(message, error, data, context)
