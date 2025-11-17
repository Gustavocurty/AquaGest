"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface RegisterConsumptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegisterConsumptionModal({
  isOpen,
  onClose,
}: RegisterConsumptionModalProps) {
  const [meterReading, setMeterReading] = useState("");
  const [readingDate, setReadingDate] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (meterReading && readingDate) {
      setSubmitSuccess(true);
      setTimeout(() => {
        setMeterReading("");
        setReadingDate("");
        setSubmitSuccess(false);
        onClose();
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
        <Card className="w-full sm:max-w-md">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h2 className="text-lg font-semibold text-gray-900">
              Registrar Leitura Manual
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Last Reading */}
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Última Leitura Automática
              </p>
              <p className="text-3xl font-bold text-cyan-600">1254 m³</p>
              <p className="text-xs text-gray-500 mt-1">Registrada em 15/07/2024</p>
            </div>

            {submitSuccess ? (
              <div className="bg-green-500 text-white rounded-lg p-4 flex items-center gap-2 justify-center">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Leitura enviada com sucesso!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Meter Reading Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Digite os números do seu hidrômetro (m³)
                    <span className="ml-2 text-gray-400 cursor-help">?</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Ex: 1268"
                    value={meterReading}
                    onChange={(e) => setMeterReading(e.target.value)}
                    className="text-base"
                  />
                </div>

                {/* Date Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Data da leitura
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="mm/dd/yyyy"
                      value={readingDate}
                      onChange={(e) => setReadingDate(e.target.value)}
                      className="text-base"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3 pt-4">
                  <Button
                    type="submit"
                    disabled={!meterReading || !readingDate}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Enviar Leitura
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Card>
      </div>
    </>
  );
}
