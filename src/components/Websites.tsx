import React, {
  useEffect,
  useRef,
  useState,
  type KeyboardEventHandler,
} from "react";
import styles from "./Websites.module.css";
import { navigate } from "astro/virtual-modules/transitions-router.js";

const Websites = () => {
  const [search, setSearch] = useState<string>("");
  const searchRef = useRef<HTMLInputElement | null>(null);

  const websites = [
    {
      label: "github",
      href: "https://github.com/Renegildo",
    },
    {
      label: "monkeytype",
      href: "https://monkeytype.com",
    },
    {
      label: "youtube",
      href: "https://www.youtube.com",
    },
    {
      label: "tabnews",
      href: "https://tabnews.com.br",
    },
    {
      label: "dribbble",
      href: "https://dribbble.com",
    },
    {
      label: "127.0.1.1",
      href: "http://localhost:3000",
    },
  ];

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      for (let i = 0; i < websites.length; i++) {
        if (websites[i].label.includes(search)) {
          navigate(websites[i].href);
        }
      }
    }
  };

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  return (
    <div className={styles.box2}>
      <div className={styles.contentWrapper}>
        <h3>websites</h3>
        <ul>
          {websites.map((website) => {
            if (!search || website.label.includes(search))
              return (
                <li key={website.label}>
                  <a href={website.href}>{website.label}</a>
                </li>
              );
          })}
        </ul>
      </div>
      <input
        className={styles.appInput}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={searchRef}
        type="text"
      />
    </div>
  );
};

export default Websites;
