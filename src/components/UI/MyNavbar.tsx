"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";
import { navToTrip } from "../../../lib/data";
import Image from "next/image";

export function MyNavBar() {
  return (
    <Navbar
      fluid
      rounded
      className="sticky top-0 z-50 bg-white border border-b-2 border-slate-300"
    >
      <Navbar.Brand as={Link} href="/">
        <Image
          src="/logo.png"
          className="mr-3 h-9"
          alt="Flowbite React Logo"
          width={100}
          height={70}
        />
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4">
        <Dropdown
          arrowIcon={true}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Friends</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} href={navToTrip.hash} active>
          Trip
        </Navbar.Link>
        <Navbar.Link href="#">Chat</Navbar.Link>
        <Navbar.Link href="#">Create-Trip-Plan</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
