import React from 'react';
import { FormatDuration } from '@/utils/FormatDuration';

const Duration = ({ duration }) => {
  return (
    <span className="duration">{duration && FormatDuration(duration)}</span>
  );
};

export default Duration;
