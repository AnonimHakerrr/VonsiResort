import React, { useState } from "react";
import { DayPicker, type PropsSingle } from "react-day-picker";
import { cn } from "../lib/utils";

interface CalendarProps extends PropsSingle {
  className?: string;
  showOutsideDays?: boolean;
  classNames?: Record<string, string>;
  disabled?: (date: Date) => boolean;
  onSelectDate?: (date: Date | undefined) => void;
}


const ukShortWeekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

export const Calendar: React.FC<CalendarProps> = ({
  className,
  classNames,
  showOutsideDays = false,
  selected,
  onSelectDate,
  ...props
}) => {
  const [month, setMonth] = useState(selected || new Date());

  const currentSelected = selected;

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      selectedDate.setHours(0, 0, 0, 0);
    }
    onSelectDate?.(selectedDate);
  };

  const handlePrev = () =>
    setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  const handleNext = () =>
    setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));

  return (
    <div className={cn("p-4 bg-black rounded-lg inline-block relative")}>
      <h3 className="text-white text-center text-base font-semibold mb-2">
        Виберіть дату
      </h3>

      <div className="flex justify-center text-sm mb-3 text-yellow-400">
        {month.toLocaleString("uk", { month: "long", year: "numeric" })}
      </div>

      <DayPicker
        {...props}
        mode="single"
        selected={currentSelected}
        onSelect={handleSelect}
        month={month}
        onMonthChange={setMonth}
        numberOfMonths={1}
        weekStartsOn={1}
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: (day) =>
            ukShortWeekdays[day.getDay() === 0 ? 6 : day.getDay() - 1],
        }}
        className={cn("bg-black rounded-lg text-white", className)}
        classNames={{
          months: "px-3 py-2",
          
          day: cn(
            "rounded-lg text-sm transition-all disabled:pointer-events-none disabled:opacity-50 text-center", // Базові класи з cva
            "hover:bg-yellow-100 hover:text-black", // Класи з варіанту 'ghost'
            "h-9 w-9 font-normal" 
          ),
          
          selected: cn(
            "!bg-yellow-400 !text-black"
          ),
          
          disabled: "text-gray-100 opacity-50",
          ...classNames,
        }}
      />

      <button
        onClick={handlePrev}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 px-2 py-2 bg-yellow-400 font-bold text-black rounded hover:bg-yellow-300"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 px-2 py-2 bg-yellow-400 font-bold text-black rounded hover:bg-yellow-300"
      >
        ›
      </button>
    </div>
  );
};

Calendar.displayName = "Calendar";