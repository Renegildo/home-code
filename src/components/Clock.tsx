import { useEffect, useState, type CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  clockWrapper: {
    display: "flex",
    flexDirection: "column",
    textAlign: "end",

    position: "relative",
  },
  header: {
    fontSize: "128px",
    fontWeight: "bold",
  },
  date: {
    fontSize: "20px",
    color: "var(--sub-headline)",

    position: "absolute",
    bottom: 0,
    right: 5,
  },
};

const Clock = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const format = (n: number) => {
    if (n < 10) {
      return "0" + n;
    }

    return n;
  };

  useEffect(() => {
    const updateDate = () => {
      setTimeout(() => {
        setCurrentDate(new Date());
        updateDate();
      }, 1000);
    };

    updateDate();
  }, []);

  return (
    <div style={styles.clockWrapper}>
      <h1 style={styles.header}>
        {format(currentDate.getHours())}:{format(currentDate.getMinutes())}
      </h1>
      <p style={styles.date}>30 july {currentDate.getFullYear()}</p>
    </div>
  );
};

export default Clock;
