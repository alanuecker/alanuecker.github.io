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
    if (!mobileSidebarRef.current?.contains(event.target as HTMLElement)) {
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
          <NavigationItem to="/#about">About</NavigationItem>
          <DelimiterIcon className={classes.delimiter} />
          <NavigationItem to="/#work">Work</NavigationItem>
          <DelimiterIcon className={classes.delimiter} />
          <NavigationItem to="/#skills">Skills</NavigationItem>
          <DelimiterIcon className={classes.delimiter} />
          <NavigationItem to="/#projects">Projects</NavigationItem>
        </ul>
        <div
          ref={mobileSidebarRef}
          className={classNames(classes.mobile, {
            [classes.mobile__show]: open,
          })}
          aria-hidden={open}
        >
          <button className={classes.close} onClick={handleClose}>
            <CloseIcon className={classes.close__icon} />
          </button>
          <ul className={classes.mobile__list}>
            <NavigationItem to="/#about" onClick={handleClose}>
              About
            </NavigationItem>
            <NavigationItem to="/#work" onClick={handleClose}>
              Work
            </NavigationItem>
            <NavigationItem to="/#skills" onClick={handleClose}>
              Skills
            </NavigationItem>
            <NavigationItem to="/#projects" onClick={handleClose}>
              Projects
            </NavigationItem>
          </ul>
        </div>
      </nav>
    </header>
  );
}
