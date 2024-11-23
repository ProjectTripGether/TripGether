"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";

export function MyNavBar() {
  return (
    <Navbar fluid rounded className="sticky top-0 z-50 bg-white">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Tripgether
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="#tripblog" active>
          Trip
        </Navbar.Link>
        <Navbar.Link href="#">Chat</Navbar.Link>
        <Navbar.Link href="#">Create-Trip-Plan</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
