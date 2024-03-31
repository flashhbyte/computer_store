"use client";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPowerOff, FaHeart } from "react-icons/fa";
import { useClerk } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { MdManageAccounts } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";

const UserLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section
      className={`w-full flex flex-col lg:flex-row justify-between lg:justify-start`}
    >
      <div
        className={`flex justify-between items-center h-full p-5 lg:flex-col lg:shadow-gray-300 dark:lg:shadow-[#282828] lg:shadow-lg rounded-xl dark:lg:bg-[#1a1919] select-none`}
      >
        <div
          className={`flex w-full gap-3 items-center cursor-pointer lg:w-[16rem]`}
        >
          <Avatar
            size={`md`}
            src={``}
            showFallback
            isBordered
            color={`success`}
          />

          <div className={``}>
            <p className={`text-slate-500 dark:text-slate-400`}>Hello,</p>
            <p className={`text-xl font-bold`}>User</p>
          </div>
        </div>

        <div className={``}>
          {/* Mobile design */}
          <div className={`lg:hidden`}>
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly>
                  <GiHamburgerMenu />
                </Button>
              </DropdownTrigger>

              <DropdownMenu aria-label={`user-managment`}>
                {/* Manage my account */}
                <DropdownItem
                  key={`Manage My Account`}
                  showDivider
                  textValue={`Manage My Account`}
                >
                  <div className={`flex gap-2 items-center`}>
                    <MdManageAccounts
                      size={30}
                      className={`basis-1/8 ${
                        pathname === "/dashboard/user/account" &&
                        "text-rose-400"
                      }`}
                    />
                    <h2 className={`text-xl font-bold`}>
                      <Link
                        href={`/dashboard/user/account`}
                        className={`${
                          pathname === "/dashboard/user/account" &&
                          "text-rose-400"
                        }`}
                      >
                        Manage My Account
                      </Link>
                    </h2>
                  </div>
                </DropdownItem>

                {/* My Order History */}
                <DropdownItem key={`Manage Orders`} textValue={`Manage Orders`}>
                  <div
                    className={`flex items-center gap-2 ${
                      (pathname === "/dashboard/user/orders" &&
                        "text-rose-400") ||
                      (pathname === "/dashboard/user/cancellations" &&
                        "text-rose-400") ||
                      (pathname === "/dashboard/user/reviews" &&
                        "text-rose-400")
                    }`}
                  >
                    <BsBagCheckFill size={30} className={`basis-1/8`} />
                    <h2 className={`text-xl font-bold`}>Manage Orders</h2>
                  </div>
                </DropdownItem>

                <DropdownItem key={`My Orders`} textValue={`My Orders`}>
                  <Link
                    href={`/dashboard/user/orders`}
                    className={`${
                      pathname === "/dashboard/user/orders" && "text-rose-400"
                    } ml-11`}
                  >
                    My Orders
                  </Link>
                </DropdownItem>

                <DropdownItem
                  key={`My Cancellations`}
                  textValue={`My Cancellations`}
                >
                  <Link
                    href={`/dashboard/user/cancellations`}
                    className={`${
                      pathname === "/dashboard/user/cancellations" &&
                      "text-rose-400"
                    } ml-11`}
                  >
                    My Cancellations
                  </Link>
                </DropdownItem>

                <DropdownItem
                  key={`My Reviews`}
                  showDivider
                  textValue={`My Reviews`}
                >
                  <Link
                    href={`/dashboard/user/reviews`}
                    className={`${
                      pathname === "/dashboard/user/reviews" && "text-rose-400"
                    } ml-11`}
                  >
                    My Reviews
                  </Link>
                </DropdownItem>

                {/* My Wishlist */}
                <DropdownItem
                  key={`My Wishlist`}
                  showDivider
                  textValue={`My Wishlist`}
                >
                  <div className={`flex items-center gap-2`}>
                    <FaHeart
                      size={30}
                      className={`basis-1/8 ${
                        pathname === "/dashboard/user/wishlist" &&
                        "text-rose-400"
                      }`}
                    />
                    <h2 className={`text-xl font-bold`}>
                      <Link
                        href={`/dashboard/user/wishlist`}
                        className={`${
                          pathname === "/dashboard/user/wishlist" &&
                          "text-rose-400"
                        }`}
                      >
                        My Wishlist
                      </Link>
                    </h2>
                  </div>
                </DropdownItem>

                {/* Log Out Button */}
                <DropdownItem
                  key={`logout`}
                  color={`danger`}
                  textValue={`log out`}
                  startContent={<FaPowerOff className={`text-lg font-bold`} />}
                  onClick={() =>
                    signOut(() =>
                      router.push(
                        `${process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL}`
                      )
                    )
                  }
                >
                  <h2 className={`ml-2 text-xl font-bold`}>Logout</h2>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          {/* Laptop design */}
          <div className={`hidden lg:block mt-4 space-y-4`}>
            <div className={`flex gap-2 items-center`}>
              <MdManageAccounts
                size={30}
                className={`basis-1/8 ${
                  pathname === "/dashboard/user/account" && "text-rose-400"
                }`}
              />
              <h2 className={`text-xl font-bold grow`}>
                <Link
                  href={`/dashboard/user/account`}
                  className={`${
                    pathname === "/dashboard/user/account" && "text-rose-400"
                  }`}
                >
                  Manage My Account
                </Link>
              </h2>
            </div>

            <div
              className={`flex items-center gap-2 ${
                (pathname === "/dashboard/user/orders" && "text-rose-400") ||
                (pathname === "/dashboard/user/cancellations" &&
                  "text-rose-400") ||
                (pathname === "/dashboard/user/reviews" && "text-rose-400")
              }`}
            >
              <BsBagCheckFill size={30} className={`basis-1/8`} />
              <h2 className={`text-xl font-bold grow`}>Manage Orders</h2>
            </div>

            <div className="md:flex md:flex-col space-y-1">
              <Link
                href={`/dashboard/user/orders`}
                className={`${
                  pathname === "/dashboard/user/orders" &&
                  "text-rose-400 font-bold"
                } ml-11 font-semibold`}
              >
                My Orders
              </Link>

              <Link
                href={`/dashboard/user/cancellations`}
                className={`${
                  pathname === "/dashboard/user/cancellations" &&
                  "text-rose-400"
                } ml-11`}
              >
                My Cancellations
              </Link>

              <Link
                href={`/dashboard/user/reviews`}
                className={`${
                  pathname === "/dashboard/user/reviews" && "text-rose-400"
                } ml-11`}
              >
                My Reviews
              </Link>
            </div>

            <div className={`flex items-center gap-2`}>
              <FaHeart
                size={30}
                className={`basis-1/8 ${
                  pathname === "/dashboard/user/wishlist" && "text-rose-400"
                }`}
              />
              <h2 className={`text-xl font-bold`}>
                <Link
                  href={`/dashboard/user/wishlist`}
                  className={`${
                    pathname === "/dashboard/user/wishlist" && "text-rose-400"
                  }`}
                >
                  My Wishlist
                </Link>
              </h2>
            </div>

            <Button
              variant={`solid`}
              startContent={<FaPowerOff className={`text-lg font-bold`} />}
              color={`danger`}
              className={`text-xl font-bold`}
              onClick={() =>
                signOut(() =>
                  router.push(
                    `${process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL}`
                  )
                )
              }
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>

      <div className={`p-6`}>{children}</div>
    </section>
  );
};

export default UserLayout;