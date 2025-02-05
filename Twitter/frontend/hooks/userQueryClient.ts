"use client";
import { useState } from 'react';
import { QueryClient } from '@tanstack/react-query';

export const useQueryClient = () => {
  return useState(() => new QueryClient())[0];
};