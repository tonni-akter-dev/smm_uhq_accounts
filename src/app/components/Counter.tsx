/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState, useEffect } from 'react'
import facebook from '../../../public/facebook.png'
import counter_layer_sm from '../../../public/counter_layer_sm.png'
import counter_layer_right_sm from '../../../public/counter_layer_right_sm.png'
import Image from 'next/image'

type Counters = {
  revenue: number
  leads: number
  customers: number
}

type StatCardProps = {
  value: number | string
  label: string
  classes?: string
}

const Counter: React.FC = () => {
  const [counters, setCounters] = useState<Counters>({
    revenue: 0,
    leads: 0,
    customers: 0,
  })

  const targetValues = {
    revenue: 89.2,
    leads: 7001,
    customers: 30124,
  }

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounters({
        revenue: parseFloat((targetValues.revenue * progress).toFixed(1)),
        leads: Math.floor(targetValues.leads * progress),
        customers: Math.floor(targetValues.customers * progress),
      })

      if (currentStep >= steps) clearInterval(interval)
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const StatCard: React.FC<StatCardProps> = ({ value, label, classes = '' }) => (
    <div className={classes}>
      <div className="lg:w-[295px] counter w-full">
        <h3 className="counter_h3 text-xl md:text-4xl lg:text-[60px] mb-2">
          {label === 'In Revenue'
            ? `${value}K+`
            : `${Number(value).toLocaleString()}+`}
        </h3>
        <p className="text_color text-[10px] md:text-xl lg:text-[32px] whitespace-nowrap">{label}</p>
      </div>
    </div>
  )

  return (
    <div className="lg:px-[245px] px-4 w-full mt-[60px] lg:pb-[100px] Z-50 relative">
      <div className="flex  items-center justify-center relative z-50">
        <StatCard value={counters.revenue} label="In Revenue" classes=" counter_1  pr-0 md:pr-20 lg:pr-[135px]" />
        <div className="border_color"></div>
        <StatCard value={counters.leads} label="Qualified Leads" classes="lg:px-[135px] counter_2" />
        <div className="border_color"></div>
        <StatCard value={counters.customers} label="Trusted Customers" classes="lg:pl-[135px] counter_3" />
      </div>
      <Image className="lg:block hidden absolute bottom-0 left-[25%]" src={facebook} alt="Facebook logo" />

      <Image className="lg:hidden block absolute bot  tom-[-64%] left-0 z-10" src={counter_layer_sm} alt="Facebook logo" />
      <Image className="lg:hidden block absolute bottom-[-64%] right-0 z-10" src={counter_layer_right_sm} alt="Facebook logo" />

    </div>
  )
}

export default Counter
