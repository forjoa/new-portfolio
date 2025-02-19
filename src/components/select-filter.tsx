// components/SelectFilter.jsx
'use client'

import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function SelectFilter({ defaultValue }: { defaultValue: string }) {
  const router = useRouter()

  return (
    <Select 
      defaultValue={defaultValue}
      onValueChange={(value) => router.push(`?filter=${value}`)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="personal">Personal</SelectItem>
          <SelectItem value="professional">Professional</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}