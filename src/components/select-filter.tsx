'use client'

import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { FilterI } from '@/lib/types'


export default function SelectFilter({ defaultValue, content }: { defaultValue: string, content: FilterI }) {
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
              <SelectValue placeholder={content.placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{content.label}</SelectLabel>
                {content.items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-base'>{content.tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}