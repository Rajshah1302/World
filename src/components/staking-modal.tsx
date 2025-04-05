"use client"

import { CheckCircle, XCircle, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface StakingModalProps {
  open: boolean
  onClose: () => void
  status: null | "pending" | "success" | "failed"
  amount: string
  tokenSymbol: string
  tokensToReceive: number
}

export function StakingModal({ open, onClose, status, amount, tokenSymbol, tokensToReceive }: StakingModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-xl p-0 border-0">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>Transaction Status</DialogTitle>
          <DialogDescription>
            Staking {amount} USD for {tokensToReceive.toLocaleString()} {tokenSymbol} tokens
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center p-6">
          {status === "pending" && (
            <>
              <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
              <p className="text-center font-medium">Processing your transaction...</p>
              <p className="text-sm text-gray-500 text-center mt-2">Please wait while we confirm your transaction</p>
            </>
          )}

          {status === "success" && (
            <>
              <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
              <p className="text-center font-semibold text-lg">Transaction Successful!</p>
              <p className="text-sm text-gray-500 text-center mt-2">
                You have successfully purchased {tokensToReceive.toLocaleString()} {tokenSymbol} tokens
              </p>
              <div className="mt-6 p-3 bg-gray-50 rounded-lg w-full">
                <div className="flex justify-between text-sm">
                  <span>Transaction Hash:</span>
                  <span className="font-mono text-xs">0x7f9e...3d2a</span>
                </div>
              </div>
            </>
          )}

          {status === "failed" && (
            <>
              <XCircle className="h-16 w-16 text-red-600 mb-4" />
              <p className="text-center font-semibold text-lg">Transaction Failed</p>
              <p className="text-sm text-gray-500 text-center mt-2">
                There was an error processing your transaction. Please try again.
              </p>
            </>
          )}
        </div>

        {status !== "pending" && (
          <div className="p-4 border-t">
            <button
              onClick={() => onClose()}
              className="w-full py-2.5 bg-gray-100 rounded-lg text-gray-800 font-medium"
            >
              Close
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

