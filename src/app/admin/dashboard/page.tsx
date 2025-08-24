'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/Button'
import { Separator } from '@/components/ui/separator'
import { Activity, Server, Database, Users, Package, AlertTriangle, CheckCircle, Clock } from 'lucide-react'

interface HealthData {
  status: string
  timestamp: string
  uptime: number
  environment: string
  version: string
  memory: {
    used: number
    total: number
    external: number
  }
  responseTime: number
}

interface SystemStats {
  cpu: number
  memory: number
  disk: number
  network: {
    requests: number
    errors: number
    avgResponseTime: number
  }
}

export default function AdminDashboard() {
  const [healthData, setHealthData] = useState<HealthData | null>(null)
  const [systemStats, setSystemStats] = useState<SystemStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  const fetchHealthData = async () => {
    try {
      const response = await fetch('/api/health')
      if (!response.ok) throw new Error('Failed to fetch health data')
      const data = await response.json()
      setHealthData(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    }
  }

  const fetchSystemStats = async () => {
    try {
      // Mock system stats for now
      const mockStats: SystemStats = {
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        disk: Math.random() * 100,
        network: {
          requests: Math.floor(Math.random() * 1000),
          errors: Math.floor(Math.random() * 10),
          avgResponseTime: Math.random() * 500,
        },
      }
      setSystemStats(mockStats)
    } catch (err) {
      console.error('Failed to fetch system stats:', err)
    }
  }

  const refreshData = async () => {
    setLoading(true)
    await Promise.all([fetchHealthData(), fetchSystemStats()])
    setLastUpdate(new Date())
    setLoading(false)
  }

  useEffect(() => {
    refreshData()
    const interval = setInterval(refreshData, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    
    if (days > 0) return `${days}d ${hours}h ${minutes}m`
    if (hours > 0) return `${hours}h ${minutes}m`
    return `${minutes}m`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-500'
      case 'warning':
        return 'bg-yellow-500'
      case 'error':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  if (loading && !healthData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">ระบบติดตามและจัดการ OneCloset</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            อัพเดทล่าสุด: {lastUpdate.toLocaleTimeString('th-TH')}
          </div>
          <Button onClick={refreshData} disabled={loading}>
            {loading ? 'กำลังโหลด...' : 'รีเฟรช'}
          </Button>
        </div>
      </div>

      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              <span>เกิดข้อผิดพลาด: {error}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Health Status */}
      {healthData && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Server className="h-5 w-5" />
              <span>สถานะเซิร์ฟเวอร์</span>
            </CardTitle>
            <CardDescription>
              ข้อมูลสุขภาพของระบบ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>สถานะ:</span>
              <Badge className={getStatusColor(healthData.status)}>
                {healthData.status === 'healthy' ? 'ปกติ' : healthData.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>เวลาทำงาน:</span>
              <span className="font-mono">{formatUptime(healthData.uptime)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>เวอร์ชัน:</span>
              <span>{healthData.version}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>สภาพแวดล้อม:</span>
              <span>{healthData.environment}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>เวลาตอบสนอง:</span>
              <span>{healthData.responseTime}ms</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* System Resources */}
      {systemStats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CPU</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.cpu.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                การใช้งาน CPU
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">หน่วยความจำ</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.memory.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                การใช้งาน RAM
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ดิสก์</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.disk.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                การใช้งานพื้นที่
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">เครือข่าย</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.network.requests}</div>
              <p className="text-xs text-muted-foreground">
                คำขอต่อนาที
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Memory Usage Details */}
      {healthData && (
        <Card>
          <CardHeader>
            <CardTitle>การใช้หน่วยความจำ</CardTitle>
            <CardDescription>
              รายละเอียดการใช้หน่วยความจำของระบบ
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>หน่วยความจำที่ใช้:</span>
                <span className="font-mono">{healthData.memory.used} MB</span>
              </div>
              <div className="flex items-center justify-between">
                <span>หน่วยความจำทั้งหมด:</span>
                <span className="font-mono">{healthData.memory.total} MB</span>
              </div>
              <div className="flex items-center justify-between">
                <span>หน่วยความจำภายนอก:</span>
                <span className="font-mono">{healthData.memory.external} MB</span>
              </div>
              <Separator />
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${(healthData.memory.used / healthData.memory.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>การดำเนินการด่วน</CardTitle>
          <CardDescription>
            การจัดการระบบอย่างรวดเร็ว
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              ตรวจสอบระบบ
            </Button>
            <Button variant="outline" size="sm">
              <Clock className="h-4 w-4 mr-2" />
              ดูประวัติ
            </Button>
            <Button variant="outline" size="sm">
              <AlertTriangle className="h-4 w-4 mr-2" />
              แจ้งเตือน
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
