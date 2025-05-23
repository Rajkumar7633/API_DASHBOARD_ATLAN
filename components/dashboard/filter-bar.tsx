"use client"

import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterBarProps {
  selectedEndpoint: string
  setSelectedEndpoint: (endpoint: string) => void
  timeRange: string
  setTimeRange: (range: string) => void
  onRefresh: () => void
  loading: boolean
}

export function FilterBar({
  selectedEndpoint,
  setSelectedEndpoint,
  timeRange,
  setTimeRange,
  onRefresh,
  loading,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Select value={selectedEndpoint} onValueChange={setSelectedEndpoint}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select endpoint" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Endpoints</SelectItem>
          <SelectItem value="/api/users">/api/users</SelectItem>
          <SelectItem value="/api/products">/api/products</SelectItem>
          <SelectItem value="/api/orders">/api/orders</SelectItem>
          <SelectItem value="/api/auth">/api/auth</SelectItem>
          <SelectItem value="/api/payments">/api/payments</SelectItem>
        </SelectContent>
      </Select>
      <Select value={timeRange} onValueChange={setTimeRange}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Time range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1h">Last hour</SelectItem>
          <SelectItem value="6h">Last 6 hours</SelectItem>
          <SelectItem value="24h">Last 24 hours</SelectItem>
          <SelectItem value="7d">Last 7 days</SelectItem>
          <SelectItem value="30d">Last 30 days</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" size="sm" className="gap-1">
        <Filter className="h-3.5 w-3.5" />
        More Filters
      </Button>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="outline" size="sm">
          Export
        </Button>
        <Button size="sm" onClick={onRefresh} disabled={loading}>
          {loading ? "Loading..." : "Refresh"}
        </Button>
      </div>
    </div>
  )
}

