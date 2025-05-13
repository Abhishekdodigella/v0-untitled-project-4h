"use client"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Copy, Check, Download } from "lucide-react"
import { useState } from "react"

interface ResultDisplayProps {
  text: string | null
  isLoading: boolean
}

export default function ResultDisplay({ text, isLoading }: ResultDisplayProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    if (!text) return

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const downloadAsText = () => {
    if (!text) return

    const blob = new Blob([text], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "generated-text.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
      </div>
    )
  }

  if (!text) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No generated text yet. Fill out the form to create content.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">{text}</div>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={copyToClipboard} disabled={copied}>
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy to Clipboard
            </>
          )}
        </Button>

        <Button variant="outline" size="sm" onClick={downloadAsText}>
          <Download className="mr-2 h-4 w-4" />
          Download as Text
        </Button>
      </div>
    </div>
  )
}
