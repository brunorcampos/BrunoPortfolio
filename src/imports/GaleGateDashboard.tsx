import svgPaths from "./svg-exs5y8c39i";
import imgPrimitiveImg from "figma:asset/0d5da6ab018faf09b0940ac3e0ab4d6d514c431f.png";
import imgImageWithFallback from "figma:asset/6cf5cad6f918fc10c24367b1d014314aecf77edc.png";
import imgElevation2 from "figma:asset/77241ae1b0f04a7b61d1f88fe77c1a97571c8316.png";

function Icon() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p169dda00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3cccb600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[40px]">
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-full" />
    </div>
  );
}

function PrimitiveImg() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] w-full" />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="content-stretch flex h-[40px] items-start overflow-clip relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Primitive.span">
      <PrimitiveImg />
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[40px]">
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[24px] top-[44px] w-[345px]" data-name="Container">
      <SlotClone />
      <Container />
      <Button />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[152.375px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[152.375px]">
        <p className="absolute font-['Roboto:Black',_sans-serif] font-black leading-[36px] left-0 text-[24px] text-nowrap text-white top-0 tracking-[0.0703px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Dashboard
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center left-[24px] top-[96px] w-[345px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.28%] top-[3.42%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327 13">
        <g id="Group">
          <path d={svgPaths.p4495700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p148cd800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3ed1b980} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p12df240} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p15218080} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1c27a940} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p13e73bc0} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p117fce80} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p3d33a000} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p25eef500} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p32830a00} fill="var(--fill-0, white)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute h-[13px] left-[33px] overflow-clip top-[19px] w-[327px]" data-name="Icon">
      <Group />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[96px] left-0 top-[4px] w-[393px]" data-name="Header">
      <Container1 />
      <Container2 />
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #1D1B20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #1D1B20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #1D1B20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #1D1B20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="basis-0 grow h-[27px] min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-full">
        <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[27px] left-0 not-italic text-[#1d1b20] text-[18px] text-nowrap top-px tracking-[-0.4395px] whitespace-pre">Upcoming Events</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[27px] relative shrink-0 w-[172.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[27px] items-center relative w-[172.094px]">
        <Icon2 />
        <Heading1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[48.297px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1d1b20] text-[12px] top-0 w-[49px]">3 events</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[27px] relative shrink-0 w-[313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[27px] items-center justify-between relative w-[313px]">
        <Container3 />
        <Text />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[-0.1504px] whitespace-pre">Sunset Surf Competition</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#ff6b35] h-[20px] relative rounded-[4px] shrink-0 w-[57.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start px-[8px] py-[2px] relative w-[57.203px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Surfing</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Text1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[20px] top-0 w-[38.625px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Oct 20</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[70.63px] size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1034)" id="Icon">
          <path d="M6 3V6L8 7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p3e7757b0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
        <defs>
          <clipPath id="clip0_1_1034">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[90.63px] top-0 w-[47.594px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">5:00 PM</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Text2 />
      <Icon4 />
      <Text3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2023d200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[64.344px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">North Point</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Text4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p296249c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p71c6d40} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p13058e80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[55.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[55.469px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] top-0 w-[56px]">24 joining</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon6 />
      <Text5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#1a2f47] h-[108px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff6b35] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[108px] items-start pb-0 pl-[16px] pr-[12px] pt-[12px] relative w-full">
          <Container5 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[-0.1504px] whitespace-pre">Kitesurfing Clinic</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[20px] relative rounded-[4px] shrink-0 w-[77.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start px-[8px] py-[2px] relative w-[77.828px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Kitesurfing</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Text6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[20px] top-0 w-[38.313px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Oct 22</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[70.31px] size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1034)" id="Icon">
          <path d="M6 3V6L8 7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p3e7757b0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
        <defs>
          <clipPath id="clip0_1_1034">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[90.31px] top-0 w-[48.281px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">9:00 AM</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <Text7 />
      <Icon8 />
      <Text8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2023d200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[56.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[56.422px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Main Area</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon9 />
      <Text9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p296249c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p71c6d40} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p13058e80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[53.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[53.484px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] top-0 w-[54px]">12 joining</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon10 />
      <Text10 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#1a2f47] h-[108px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#00518a] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[108px] items-start pb-0 pl-[16px] pr-[12px] pt-[12px] relative w-full">
          <Container11 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[-0.1504px] whitespace-pre">Paddleboard Tour</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[20px] relative rounded-[4px] shrink-0 w-[40.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start px-[8px] py-[2px] relative w-[40.125px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">SUP</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Text11 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[20px] top-0 w-[38.625px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Oct 24</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[70.63px] size-[12px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1034)" id="Icon">
          <path d="M6 3V6L8 7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p3e7757b0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
        <defs>
          <clipPath id="clip0_1_1034">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[90.63px] top-0 w-[47.25px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">7:30 AM</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <Icon11 />
      <Text12 />
      <Icon12 />
      <Text13 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2023d200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[38.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[38.281px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Marina</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon13 />
      <Text14 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p296249c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p71c6d40} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <path d={svgPaths.p13058e80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[53.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[53.906px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] top-0 w-[54px]">18 joining</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon14 />
      <Text15 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#1a2f47] h-[108px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-green-500 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[108px] items-start pb-0 pl-[16px] pr-[12px] pt-[12px] relative w-full">
          <Container17 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[113px] relative shrink-0 w-[313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[113px] items-start overflow-clip relative rounded-[inherit] w-[313px]">
        <Container10 />
        <Container16 />
        <Container22 />
      </div>
    </div>
  );
}

function UpcomingEvents() {
  return (
    <div className="h-[20px] relative shrink-0 w-[100.359px]" data-name="UpcomingEvents">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[100.359px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[-0.1504px] whitespace-pre">View All Events</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ff6b35] h-[44px] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[313px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[44px] items-center justify-center pl-0 pr-[0.016px] py-0 relative w-[313px]">
        <UpcomingEvents />
        <Icon15 />
      </div>
    </div>
  );
}

function UpcomingEvents1() {
  return (
    <div className="absolute bg-[#c6d6eb] box-border content-stretch flex flex-col gap-[16px] h-[242px] items-start left-[24px] overflow-clip p-[16px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[351px] w-[345px]" data-name="UpcomingEvents">
      <Container4 />
      <Container23 />
      <Button1 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p102c1b00} id="Vector" stroke="var(--stroke-0, #1D1B20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p74e0180} id="Vector_2" stroke="var(--stroke-0, #1D1B20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p23133180} id="Vector_3" stroke="var(--stroke-0, #1D1B20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="basis-0 grow h-[27px] min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-full">
        <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[27px] left-0 not-italic text-[#1d1b20] text-[18px] text-nowrap top-px tracking-[-0.4395px] whitespace-pre">Available Sports</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[27px] relative shrink-0 w-[159.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[27px] items-center relative w-[159.953px]">
        <Icon16 />
        <Heading5 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[47.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[47.016px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1d1b20] text-[12px] top-0 w-[48px]">4 sports</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[27px] mb-[-4px] relative shrink-0 w-[313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[27px] items-center justify-between relative w-[313px]">
        <Container24 />
        <Text16 />
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[313px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bb2e280} id="Vector" stroke="var(--stroke-0, #D7263D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[277px] rounded-[3.35544e+07px] size-[28px] top-[8px]" data-name="Button">
      <Icon17 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
      <Button2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.016px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[47.016px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[-0.1504px] whitespace-pre">Surfing</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[rgba(240,177,0,0.2)] h-[20px] relative rounded-[4px] shrink-0 w-[30.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start px-[8px] py-[2px] relative w-[30.578px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ffdf20] text-[12px] text-nowrap whitespace-pre">Int</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Text17 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)]">Ride the waves and experience the thrill</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p5070148} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
          <path d={svgPaths.p1a296200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
          <path d={svgPaths.p157451c0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[79.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[79.641px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] text-nowrap whitespace-pre">Perfect waves</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon18 />
      <Text18 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[88px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Container27 />
          <Paragraph />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#ff6b35] box-border content-stretch flex flex-col h-[184px] items-start left-[-1px] overflow-clip rounded-br-[15px] rounded-tl-[15px] rounded-tr-[15px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[13px] w-[313px]" data-name="Container">
      <Container26 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[239px] mb-[-4px] relative rounded-[16px] shrink-0 w-[313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[12px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[239px] overflow-clip relative rounded-[inherit] w-[313px]">
        <Container30 />
      </div>
    </div>
  );
}

function SportsModule() {
  return (
    <div className="absolute bg-[#c6d6eb] box-border content-stretch flex flex-col h-[241px] items-start left-[24px] overflow-clip pb-[20px] pl-[16px] pr-0 pt-[16px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[15px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[607px] w-[345px]" data-name="SportsModule">
      <Container25 />
      <Container31 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[32px] relative shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-white top-0 w-[122px]">Low of 22 degrees, very clear skies.</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] h-[44px] relative rounded-[14px] shrink-0 w-[146px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start pb-0 pt-[6px] px-[12px] relative w-[146px]">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-end justify-between left-[36.8px] rounded-[16px] top-[281px] w-[297px]" data-name="Container">
      <Container32 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[125.5px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#0c96eb] h-[32px] left-[208.05px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[287px] w-[151.5px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[12px] text-nowrap text-white top-[8px] whitespace-pre">View Full Weather</p>
      <Icon19 />
    </div>
  );
}

function Component01SunnyColor() {
  return (
    <div className="absolute left-[328px] size-[30px] top-[161.56px]" data-name="01_sunny_color">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="01_sunny_color">
          <g clipPath="url(#clip0_1_985)">
            <g id="base"></g>
            <path d={svgPaths.p2d7f4d80} fill="url(#paint0_radial_1_985)" id="å½¢ç¶" />
            <path d={svgPaths.p1350f80} fill="url(#paint1_linear_1_985)" id="å½¢ç¶_2" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(9.14063 8.67187) rotate(43.0203) scale(19.5537)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_985" r="1">
            <stop offset="0.193671" stopColor="#FFE475" />
            <stop offset="0.529275" stopColor="#FFB029" />
            <stop offset="0.780467" stopColor="#FF9100" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_985" x1="0.761718" x2="29.2383" y1="0.761719" y2="29.2383">
            <stop offset="0.166667" stopColor="#FFE475" />
            <stop offset="0.798611" stopColor="#FFBF29" />
          </linearGradient>
          <clipPath id="clip0_1_985">
            <rect fill="white" height="30" rx="15" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[24px] top-[155px]">
      <div className="absolute h-[180px] left-[24px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)] top-[155px] w-[345px]" data-name="Elevation 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.63] pointer-events-none rounded-[16px] size-full" src={imgElevation2} />
      </div>
      <Container33 />
      <Button3 />
      <div className="absolute font-['Roboto:ExtraBold',_sans-serif] font-extrabold leading-[40px] left-[116px] text-[#ecf3f7] text-[32px] text-center text-nowrap top-[185px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Magnolia `}</p>
        <p className="mb-0">Beach</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute font-['Jost:Bold',_sans-serif] font-bold h-[124.938px] leading-[normal] left-[292.38px] text-[77px] text-center text-white top-[165.14px] translate-x-[-50%] w-[111.273px]">32</p>
      <Component01SunnyColor />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[31px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="Icon">
          <path d={svgPaths.p28954580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[15px] relative shrink-0 w-[40.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[40.281px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-nowrap text-white top-0 tracking-[0.1172px] whitespace-pre">Weather</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[43px] relative shrink-0 w-[40.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[43px] items-center justify-center relative w-[40.281px]">
        <Icon20 />
        <Text19 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[31px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 33">
        <g id="Icon">
          <path d={svgPaths.peb8d080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2" />
          <path d={svgPaths.p10d8f780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[15px] relative shrink-0 w-[58.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[58.875px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 tracking-[0.1172px] whitespace-pre">Spot Search</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[43px] relative shrink-0 w-[58.875px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[43px] items-center justify-center relative w-[58.875px]">
        <Icon21 />
        <Text20 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[31px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="Icon">
          <path d={svgPaths.p9549460} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2" />
          <path d={svgPaths.p120c9140} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2" />
          <path d={svgPaths.p126f7600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2" />
          <path d={svgPaths.p39feb80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[15px] relative shrink-0 w-[54.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[54.734px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 tracking-[0.1172px] whitespace-pre">Community</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[43px] relative shrink-0 w-[54.734px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[43px] items-center justify-center relative w-[54.734px]">
        <Icon22 />
        <Text21 />
      </div>
    </div>
  );
}

function BottomNavbar() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#294666] h-[72px] items-center justify-between left-0 pl-[50.516px] pr-[50.531px] py-0 to-[#36547a] top-[780px] w-[393px]" data-name="BottomNavbar">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

export default function GaleGateDashboard() {
  return (
    <div className="relative w-[393px] h-[852px] overflow-clip" data-name="GaleGate Dashboard" style={{ backgroundImage: "linear-gradient(rgb(12, 43, 78) 50.481%, rgb(54, 83, 134) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Header />
      <UpcomingEvents1 />
      <SportsModule />
      <Group1 />
      <BottomNavbar />
    </div>
  );
}