import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useKey } from 'react-use';

import { NavigationItem } from '../NavigationItem';
import MenuIcon from '../../img/menu.svg?react';
import DelimiterIcon from '../../img/delimiter.svg?react';
import CloseIcon from '../../img/close.svg?react';

import classes from './style.module.scss';

export function Header(): React.JSX.Element {
  const mobileSidebarRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const [open, setOpen] = useState(false);

  function handleOpen() {
    if (!open) {
      setOpen(true);
    }
  }

  function handleClose() {
    if (open) {
      setOpen(false);
    }
  }

  const handleOutsiteClick = (event: MouseEvent) => {
    if (!mobileSidebarRef.current?.contains(event.target)) {
      if (open) {
        handleClose();
        menuButtonRef.current?.focus();
      }
    }
  };

  useKey('Escape', handleClose, { target: window });
  useKey('Esc', handleClose, { target: window });

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener('mousedown', handleOutsiteClick, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [open, handleClose]);

  return (
    <header className={classes.root}>
      <nav>
        <div className={classes.container}>
          <span className={classes.name}>Alan Uecker</span>
          <span className={classes.job}>Software Engineer</span>
          <button
            ref={menuButtonRef}
            className={classes.menu}
            type="button"
            title="Open mobile navigation"
            onClick={handleOpen}
          >
            <MenuIcon className={classes.menu__icon} />
          </button>
        </div>
        <ul className={classes.nav}>
          <NavigationItem href="#">About</NavigationItem>
          <DelimiterIcon className={classes.delimiter} />
          <NavigationItem href="#work">Work</NavigationItem>
          <DelimiterIcon className={classes.delimiter} />
          <NavigationItem href="#skills">Skills</NavigationItem>
          <DelimiterIcon className={classes.delimiter} />
          <NavigationItem href="#projects">Projects</NavigationItem>
        </ul>
        <div
          ref={mobileSidebarRef}
          className={classNames(classes.mobile, {
            [classes.mobile__show]: open,
          })}
        >
          <button className={classes.close} onClick={handleClose}>
            <CloseIcon className={classes.close__icon} />
          </button>
          <ul className={classes.mobile__list}>
            <NavigationItem href="#" onClick={handleClose}>
              About
            </NavigationItem>
            <NavigationItem href="#work" onClick={handleClose}>
              Work
            </NavigationItem>
            <NavigationItem href="#skills" onClick={handleClose}>
              Skills
            </NavigationItem>
            <NavigationItem href="#projects" onClick={handleClose}>
              Projects
            </NavigationItem>
          </ul>
        </div>
      </nav>
    </header>
  );
}
