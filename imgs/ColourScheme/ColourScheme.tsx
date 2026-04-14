function Logo({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[90px] left-[529px] top-[365px] w-[74.31px]"} data-name="Logo">
      <div className="absolute inset-[17.58%_0_0_0]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.3097 74.1758">
          <ellipse cx="37.1548" cy="37.0879" fill="var(--fill-0, #22C55E)" id="Ellipse 1" rx="37.1548" ry="37.0879" />
        </svg>
      </div>
      <p className="absolute font-['Lalezar:Regular',sans-serif] inset-[2.67%_7.59%_8.92%_18.74%] leading-[normal] not-italic text-[#f0fdf4] text-[73.164px]">N</p>
    </div>
  );
}

export default function ColourScheme() {
  return (
    <div className="relative size-full" data-name="Colour scheme">
      <div className="absolute bg-[#f0fdf4] h-[81.539px] left-[6px] rounded-[25px] top-0 w-[94.449px]" />
      <div className="absolute bg-[#052e16] h-[81.539px] left-[164.27px] rounded-[23px] top-0 w-[104.66px]" />
      <div className="absolute bg-[#14532d] h-[81.539px] left-[330.19px] rounded-[24px] top-0 w-[99.554px]" />
      <Logo />
      <div className="absolute font-['Lalezar:Regular',sans-serif] h-[69.393px] leading-[0] left-[24.97px] not-italic text-[11.663px] text-white top-[90px] w-[145.503px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">F0FDF4</p>
        <p className="leading-[normal] mb-0">{`Light backgrounds &`}</p>
        <p className="leading-[normal]">{` section tints`}</p>
      </div>
      <div className="absolute font-['Lalezar:Regular',sans-serif] h-[15.288px] leading-[0] left-[183.24px] not-italic text-[11.663px] text-white top-[95.1px] w-[160.819px]">
        <p className="leading-[normal] mb-0">#052E16</p>
        <p className="leading-[normal]">Ultra-dark green for high contrast</p>
      </div>
      <div className="absolute font-['Lalezar:Regular',sans-serif] h-[76.442px] leading-[0] left-[351.71px] not-italic text-[11.663px] text-white top-[95.1px] w-[122.529px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">14532D</p>
        <p className="leading-[normal] mb-0">Deep forest green</p>
        <p className="leading-[normal]">{` for dark sections`}</p>
      </div>
      <div className="absolute font-['Lalezar:Regular',sans-serif] h-[76.442px] leading-[0] left-[515.09px] not-italic text-[11.663px] text-white top-[95.1px] w-[91.896px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">#15803D</p>
        <p className="leading-[normal] mb-0">Text on light</p>
        <p className="leading-[normal]">{` backgrounds`}</p>
      </div>
      <div className="absolute font-['Lalezar:Regular',sans-serif] h-[69.393px] leading-[0] left-[12.09px] not-italic text-[11.663px] text-white top-[270.27px] w-[145.503px]">
        <p className="leading-[normal] mb-0">DCFCE7</p>
        <p className="leading-[normal]">{`Subtle borders & hover states`}</p>
      </div>
      <div className="absolute font-['Lalezar:Regular',sans-serif] h-[91.731px] leading-[0] left-[170.36px] not-italic text-[11.663px] text-white top-[275.37px] w-[160.819px]">
        <p className="leading-[normal] mb-0">#4ADE80</p>
        <p className="leading-[normal]">{`Vibrant accents & gradients`}</p>
      </div>
      <div className="absolute font-['Lalezar:Regular',sans-serif] h-[76.442px] leading-[0] left-[338.84px] not-italic text-[11.663px] text-white top-[275.37px] w-[135.292px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">22C55E</p>
        <p className="leading-[normal] mb-0">Primary brand color</p>
        <p className="leading-[normal]">{` (Logo/Icons)`}</p>
      </div>
      <div className="absolute font-['Lalezar:Regular',sans-serif] h-[76.442px] leading-[0] left-[502.21px] not-italic text-[11.663px] text-white top-[275.37px] w-[127.634px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">#16A34A</p>
        <p className="leading-[normal] mb-0">{`Primary buttons & `}</p>
        <p className="leading-[normal]">active links</p>
      </div>
      <div className="absolute bg-[#15803d] h-[76.442px] left-[501.22px] rounded-[23px] top-[5.1px] w-[91.896px]" />
      <div className="absolute bg-[#dcfce7] h-[81.539px] left-0 rounded-[18px] top-[188px] w-[94.449px]" />
      <div className="absolute bg-[#4ade80] h-[81.539px] left-[158.27px] rounded-[22px] top-[188px] w-[104.66px]" />
      <div className="absolute bg-[#22c55e] h-[81.539px] left-[324.19px] rounded-[22px] top-[188px] w-[99.554px]" />
      <div className="absolute bg-[#16a34a] h-[76.442px] left-[495.22px] rounded-[19px] top-[193.1px] w-[91.896px]" />
      <div className="absolute font-['Lalezar:Regular',sans-serif] h-[104px] leading-[0] left-[9.99px] not-italic text-[11.663px] text-white top-[481.24px] w-[155.763px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{` DCFCE7`}</p>
        <p className="leading-[normal]">{` (Used for text on dark backgrounds and glass cards)`}</p>
      </div>
      <div className="absolute font-['Lalezar:Regular',sans-serif] h-[92px] leading-[0] left-[178.73px] not-italic text-[11.663px] text-white top-[486.24px] w-[149.772px]">
        <p className="leading-[normal] mb-0">09090B</p>
        <p className="leading-[normal]">(Used for the footer and high-contrast dark sections)</p>
      </div>
      <div className="absolute font-['Lalezar:Regular',sans-serif] h-[94px] leading-[0] left-[351.47px] not-italic text-[11.356px] text-white top-[486.24px] w-[153.766px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">71717A</p>
        <p className="leading-[normal]">{` (Used for secondary body text and descriptions)`}</p>
      </div>
      <div className="absolute bg-white h-[81.539px] left-0 rounded-[19px] top-[370.58px] w-[94.449px]" />
      <div className="absolute bg-[#09090b] h-[81.539px] left-[158.27px] rounded-[18px] top-[370.58px] w-[104.66px]" />
      <div className="absolute bg-[#71717a] h-[81.539px] left-[324.19px] rounded-[15px] top-[370.58px] w-[99.554px]" />
      <div className="absolute font-['Lalezar:Regular',sans-serif] h-[203.846px] leading-[0] left-[17px] not-italic text-[18.416px] text-white top-[777px] w-[436.508px]">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Hero Slider Backgrounds</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[27.624000000000002px]">
            <span className="leading-[normal]">{`Slide 1 (Milk): #064E3B (Emerald 900) `}</span>
          </li>
          <li className="mb-0 ms-[27.624000000000002px]">
            <span className="leading-[normal]">Slide 2 (Paneer): #14532D (Green 900)</span>
          </li>
          <li className="ms-[27.624000000000002px]">
            <span className="leading-[normal]">{`Slide 3 (Sweets): #3F6212 (Lime 800) `}</span>
          </li>
        </ul>
      </div>
      <div className="absolute bg-[#064e3b] h-[175.818px] left-0 rounded-[48px] top-[591px] w-[191.451px]" />
      <div className="absolute bg-[#14532d] h-[175.818px] left-[216px] rounded-[34px] top-[591px] w-[191.451px]" />
      <div className="absolute bg-[#3f6212] h-[175.818px] left-[449px] rounded-[45px] top-[591px] w-[191.451px]" />
      <p className="absolute font-['Lalezar:Regular',sans-serif] h-[28px] leading-[normal] left-[548px] not-italic text-[12.891px] text-white top-[487px] w-[40.938px]">Logo</p>
    </div>
  );
}