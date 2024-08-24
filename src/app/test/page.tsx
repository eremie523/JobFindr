"use client"
import EdgeStoreTestUpload from '@/components/edge-store-test-upload'
import { EdgeStoreProvider } from '@/lib/edgestore'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <EdgeStoreProvider>
      <EdgeStoreTestUpload />
    </EdgeStoreProvider>
  )
}

export default page