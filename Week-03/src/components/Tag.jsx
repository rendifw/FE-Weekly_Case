import { addDays, format, isSameDay, parseISO } from "date-fns";

const Tag = ({ date, today }) => {
  const parsedDue = parseISO(date);
  const parsedToday = parseISO(today);

  let label;
  let tagStyles;
  if (date === today) {
    label = "Today";
    tagStyles = "bg-[#E8F4FF] text-[#2F46DB]";
  } else if (isSameDay(parsedDue, addDays(parsedToday, 1))) {
    label = "Tomorrow";
    tagStyles = "bg-[#FFF7E3] text-[#D86C01] w-[120px]";
  } else {
    label = format(parsedDue, "EEE, dd LLL");
    tagStyles = "bg-[#E4FFE4] text-[#367812] w-[120px]";
  }

  return (
    <span className={`px-3 py-2 rounded-lg text-center ${tagStyles}`}>
      {label}
    </span>
  );
};

export default Tag;
