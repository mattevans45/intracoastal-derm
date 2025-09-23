'use client';

import { useState, useEffect } from 'react';
import servicesData from "../servicesData";
import slugify from "../slugify.js";

export function useServiceData(categoryId, serviceName) {
  const [data, setData] = useState({
    categories: [],
    category: null,
    service: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    try {
      const categories = Object.keys(servicesData).map((key) => ({
        id: key,
        name: key.charAt(0).toUpperCase() + key.slice(1),
        services: servicesData[key],
      }));

      const category = categories.find((cat) => cat.id === categoryId);
      const service = category
        ? category.services.find((s) => slugify(s.name) === serviceName)
        : null;

      setData({
        categories,
        category,
        service,
        isLoading: false,
        error: null
      });
    } catch (error) {
      setData(prevData => ({
        ...prevData,
        isLoading: false,
        error: error.message
      }));
    }
  }, [categoryId, serviceName]);

  return data;
}