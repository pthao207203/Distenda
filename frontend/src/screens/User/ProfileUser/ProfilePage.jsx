import React, { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";
function ProfilePage() {
  return (
    <div className="flex flex-col w-full min-h-screen"         
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.03)", // Nền trắng mờ
    }} >
        <div className="flex relative flex-col max-w-screen max-md:max-w-full" >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/a96208249e99f892690a38403ef65715e8397ce2ec94f44b8034c91c728a4a58?apiKey=1914b3001bed44e2a53adf842ab19f47&"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />

          <section className="relative z-10 mb-0 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                <div className="overflow-hidden relative grow px-0 py-20 w-full bg-white  bg-opacity-10 backdrop-blur-[10px] max-md:px-5max-md:w-full  min-h-screen">
                  <div className="flex gap-5 max-md:flex-col">
                    {/* Left Section */} 
                    <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full ">
                      <div className="flex relative flex-col ml-[61px] max-w-[227px] max-h-[220px] aspect-auto text-xl leading-none text-black max-md:mt-10">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/e6178f5613d7865e7acd8c40086107784a603ef08702af69aaac2717a3a02b70?apiKey=1914b3001bed44e2a53adf842ab19f47&"
                          alt="Profile avatar"
                          className="object-contain w-full rounded-full aspect-[1.03]"
                        />
                        <button className="flex gap-2 items-center self-center w-[175px] px-[12px] mt-[33px] bg-white text-white bg-opacity-10 min-h-[43px]">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/1914b3001bed44e2a53adf842ab19f47/5110a31b2b6d9408a73c85866d98ee04c0a795e8d44a9e67ee0b4359388dbaea?apiKey=1914b3001bed44e2a53adf842ab19f47&"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto my-aspect-square w-[30px] "
                          />
                          <span>Tải ảnh lên</span>
                        </button>
                      </div>
                    </div>
                    {/* Right Section */}
                    <div className="flex flex-col mr-[162px] w-4/5 max-md:ml-0 max-md:w-full">
                      <ProfileForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
}

export default ProfilePage;
