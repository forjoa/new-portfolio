'use client'

import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export default function SelectFilter({ defaultValue }: { defaultValue: string }) {
  const router = useRouter()

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Select
            defaultValue={defaultValue}
            onValueChange={(value) => router.push(`?filter=${value}`)}
          >
            <SelectTrigger className="w-[200px] text-base">
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
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-base'>Select a category information</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}