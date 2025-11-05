import svgPaths from "./svg-6hzt873fuh";
import imgImageMagnoliaBeach from "figma:asset/ee184e9f043d806b397cd34ca26fdc9297a2db31.png";
import imgGaleGateDashboard from "figma:asset/5149dcf3cc27273575b1a3ab5190e50361440e51.png";
import imgImageMonsteraBeach from "figma:asset/37b05fe0c7d72591f3c4ae1c5554346eb9be016b.png";
import imgImageCocoBeach from "figma:asset/29de73630f57bcc652ea49e65ce4263e70bba3c9.png";
import imgImage from "figma:asset/38f54f83855982c76321a3cce9111aefa3d64baf.png";

function ImageMagnoliaBeach() {
  return (
    <div className="absolute h-[246px] left-0 top-[-65.44px] w-[345px]" data-name="Image (Magnolia Beach)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageMagnoliaBeach} />
    </div>
  );
}

function GaleGateDashboard() {
  return (
    <div className="absolute h-[160px] left-0 overflow-clip top-0 w-[345px]" data-name="GaleGateDashboard">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGaleGateDashboard} />
      <ImageMagnoliaBeach />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="absolute font-['Jost:Bold',sans-serif] font-bold leading-[25px] left-0 text-[28px] text-nowrap text-white top-0 whitespace-pre">
        <p className="mb-0">Magnolia</p>
        <p>Beach</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return <div className="h-[15px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px h-[41px] items-start left-[12px] top-[19.36px] w-[148.562px]" data-name="Container">
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function GaleGateDashboard1() {
  return (
    <div className="absolute h-[160px] left-0 top-0 w-[345px]" data-name="GaleGateDashboard">
      <Container />
    </div>
  );
}

function GaleGateDashboard2() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[80px] left-0 to-[rgba(0,0,0,0)] top-[80px] w-[345px]" data-name="GaleGateDashboard" />;
}

function Container2() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[65.422px]" data-name="Container">
      <p className="absolute font-['Jost:SemiBold',sans-serif] font-semibold leading-[52px] left-[-16.34px] text-[65px] text-nowrap text-white top-[7.59px] whitespace-pre">22</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[21px] left-[5px] top-[0.5px] w-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[21px] items-start relative w-[18px]">
        <p className="basis-0 font-['Jost:Regular',sans-serif] font-normal grow leading-[21px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950">☀️</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#fdc700] content-stretch flex items-center justify-center left-[69.42px] rounded-[3.35544e+07px] size-[24px] top-[2px]" data-name="Container">
      <Text />
    </div>
  );
}

function GaleGateDashboard3() {
  return (
    <div className="absolute h-[52px] left-[241.58px] top-[10px] w-[93.422px]" data-name="GaleGateDashboard">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[16.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.5px] items-start relative w-full">
        <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[11px] text-nowrap text-white whitespace-pre">View Full Weather</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 2.5L9.5 6L6 9.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#00a8e8] box-border content-stretch flex gap-[6px] h-[26.5px] items-center left-[12px] px-[10px] py-0 rounded-[8px] top-[59px] w-[129.109px]" data-name="Button">
      <Text1 />
      <Icon />
    </div>
  );
}

function GaleGateDashboard4() {
  return (
    <div className="absolute h-[97.5px] left-0 top-[62.5px] w-[345px]" data-name="GaleGateDashboard">
      <Button />
      <p className="absolute font-['Jost:Regular',sans-serif] font-normal leading-[15px] left-[12px] text-[10px] text-[rgba(255,255,255,0.9)] top-[7.22px] w-[148.562px]">Low of 18°C, very clear skies.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[160px] overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <GaleGateDashboard />
      <GaleGateDashboard1 />
      <GaleGateDashboard2 />
      <GaleGateDashboard3 />
      <GaleGateDashboard4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6 1.5V4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 1.5V4.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p13693a10} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 7.5H15.75" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-start relative w-full">
        <p className="font-['Jost:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Upcoming Events</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[152.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[24px] items-center relative w-[152.297px]">
        <Icon1 />
        <Heading3 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[16.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.5px] items-start relative w-full">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[11px] text-nowrap text-white whitespace-pre">Swipe</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 2.5L9.5 6L6 9.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[16.5px] left-[278.69px] top-[2.75px] w-[44.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16.5px] items-center relative w-[44.313px]">
        <Text2 />
        <Icon2 />
      </div>
    </div>
  );
}

function GaleGateDashboard5() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="GaleGateDashboard">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Jost:SemiBold',sans-serif] font-semibold leading-[16.25px] left-0 text-[13px] text-nowrap text-white top-[-1px] whitespace-pre">Sunset Surf Competition</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_199_4185)" id="Icon">
          <path d="M3.66667 0.916667V2.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d="M7.33333 0.916667V2.75" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p2388ff00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d="M1.375 4.58333H9.625" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_199_4185">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[17px] top-0 w-[29.781px]" data-name="Text">
      <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Oct 20</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[58.78px] size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_199_4170)" id="Icon">
          <path d={svgPaths.p105d7900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p1f658e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_199_4170">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[75.78px] top-0 w-[37.234px]" data-name="Text">
      <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">5:00 PM</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[15px] relative shrink-0 w-[234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[234px]">
        <Icon3 />
        <Text3 />
        <Icon4 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.p2a90d500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p2f85b200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[48.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-[48.188px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">North Point</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[15px] items-center relative w-[234px]">
        <Icon5 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_199_4164)" id="Icon">
          <path d={svgPaths.p39fe300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p13780380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p36312f60} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p36363d00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_199_4164">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[43.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-[43.891px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">24 joining</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-full items-center relative w-[234px]">
        <Icon6 />
        <Text6 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[53px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#1a2f47] h-[95.25px] relative rounded-[14px] shrink-0 w-[260px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff6b35] border-[0px_0px_0px_6px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[6px] h-[95.25px] items-start pb-0 pl-[16px] pr-[10px] pt-[10px] relative w-[260px]">
        <Heading4 />
        <Container10 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Jost:SemiBold',sans-serif] font-semibold leading-[16.25px] left-0 text-[13px] text-nowrap text-white top-[-1px] whitespace-pre">Beach Cleanup Day</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_199_4185)" id="Icon">
          <path d="M3.66667 0.916667V2.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d="M7.33333 0.916667V2.75" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p2388ff00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d="M1.375 4.58333H9.625" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_199_4185">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[17px] top-0 w-[29.469px]" data-name="Text">
      <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Oct 22</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[58.47px] size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_199_4170)" id="Icon">
          <path d={svgPaths.p105d7900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p1f658e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_199_4170">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[75.47px] top-0 w-[38.469px]" data-name="Text">
      <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">9:00 AM</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[15px] relative shrink-0 w-[234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[234px]">
        <Icon7 />
        <Text7 />
        <Icon8 />
        <Text8 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.p2a90d500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p2f85b200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[67.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-[67.609px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Magnolia Beach</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[15px] relative shrink-0 w-[234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[15px] items-center relative w-[234px]">
        <Icon9 />
        <Text9 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_199_4164)" id="Icon">
          <path d={svgPaths.p39fe300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p13780380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p36312f60} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p36363d00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_199_4164">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15px] relative shrink-0 w-[42.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-[42.563px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">12 joining</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-full items-center relative w-[234px]">
        <Icon10 />
        <Text10 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[53px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#1a2f47] h-[95.25px] relative rounded-[14px] shrink-0 w-[260px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#4ecdc4] border-[0px_0px_0px_6px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[6px] h-[95.25px] items-start pb-0 pl-[16px] pr-[10px] pt-[10px] relative w-[260px]">
        <Heading5 />
        <Container15 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Jost:SemiBold',sans-serif] font-semibold leading-[16.25px] left-0 text-[13px] text-nowrap text-white top-[-1px] whitespace-pre">Kayak Group Tour</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_199_4185)" id="Icon">
          <path d="M3.66667 0.916667V2.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d="M7.33333 0.916667V2.75" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p2388ff00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d="M1.375 4.58333H9.625" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_199_4185">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[17px] top-0 w-[29.422px]" data-name="Text">
      <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Oct 25</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[58.42px] size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_199_4170)" id="Icon">
          <path d={svgPaths.p105d7900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p1f658e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_199_4170">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[75.42px] top-0 w-[37.281px]" data-name="Text">
      <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">2:00 PM</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[15px] relative shrink-0 w-[234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[234px]">
        <Icon11 />
        <Text11 />
        <Icon12 />
        <Text12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.p2a90d500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p2f85b200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15px] relative shrink-0 w-[45.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-[45.984px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Moon Lake</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[15px] relative shrink-0 w-[234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[15px] items-center relative w-[234px]">
        <Icon13 />
        <Text13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_199_4164)" id="Icon">
          <path d={svgPaths.p39fe300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p13780380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p36312f60} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
          <path d={svgPaths.p36363d00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_199_4164">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[15px] relative shrink-0 w-[37.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-[37.828px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">8 joining</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-full items-center relative w-[234px]">
        <Icon14 />
        <Text14 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[53px] items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#1a2f47] h-[95.25px] relative rounded-[14px] shrink-0 w-[260px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffd166] border-[0px_0px_0px_6px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[6px] h-[95.25px] items-start pb-0 pl-[16px] pr-[10px] pt-[10px] relative w-[260px]">
        <Heading6 />
        <Container20 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[10px] h-[99px] items-start overflow-clip relative shrink-0 w-[361px]" data-name="Container">
      <Container11 />
      <Container16 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white relative rounded-[3.35544e+07px] shrink-0 size-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[6px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative rounded-[3.35544e+07px] shrink-0 size-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[6px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[6px] h-[6px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container23 />
      {[...Array(2).keys()].map((_, i) => (
        <Container24 key={i} />
      ))}
    </div>
  );
}

function GaleGateDashboard6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="GaleGateDashboard">
      <Container22 />
      <Container26 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[21px] relative shrink-0 w-[98.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[21px] items-start relative w-[98.078px]">
        <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">View All Events</p>
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

function GaleGateDashboard7() {
  return (
    <div className="bg-[#ff6b35] h-[41px] relative rounded-[12px] shrink-0 w-full" data-name="GaleGateDashboard">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[6px] h-[41px] items-center justify-center pl-0 pr-[0.016px] py-0 relative w-full">
          <Text15 />
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[10px] h-[231px] items-start pb-0 pt-[16px] px-[16px] relative rounded-[20px] shrink-0 w-[395px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <GaleGateDashboard5 />
      <GaleGateDashboard6 />
      <GaleGateDashboard7 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p625a980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18c84c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-start relative w-full">
        <p className="font-['Jost:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Nearby Spots</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[125.516px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[24px] items-center relative w-[125.516px]">
        <Icon16 />
        <Heading7 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="basis-0 grow h-[16.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.5px] items-start relative w-full">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[11px] text-nowrap text-white whitespace-pre">Swipe</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 2.5L9.5 6L6 9.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16.5px] items-center relative w-[44.313px]">
        <Text16 />
        <Icon17 />
      </div>
    </div>
  );
}

function GaleGateDashboard8() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-[329px]" data-name="GaleGateDashboard">
      <Container28 />
      <Container29 />
    </div>
  );
}

function ImageMonsteraBeach() {
  return (
    <div className="absolute h-[120px] left-0 top-0 w-[220px]" data-name="Image (Monstera Beach)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageMonsteraBeach} />
    </div>
  );
}

function Container30() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[120px] left-0 to-[rgba(0,0,0,0)] top-0 w-[220px]" data-name="Container" />;
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p32a9af80} id="Vector" stroke="var(--stroke-0, #14294A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[184px] rounded-[3.35544e+07px] size-[28px] top-[8px]" data-name="Button">
      <Icon18 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Jost:SemiBold',sans-serif] font-semibold grow leading-[21px] min-h-px min-w-px relative shrink-0 text-[14px] text-white">Monstera Beach</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[45.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[13.5px] items-start relative w-[45.984px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">💨 19 km/h</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[50.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[13.5px] items-start relative w-[50.469px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">🌊 0.9-1.2 m</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[32.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[13.5px] items-start relative w-[32.344px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">🌡️ 22°C</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[6px] h-[13.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <Text18 />
      <Text19 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[3px] h-[57.5px] items-start left-0 pb-0 pt-[10px] px-[10px] top-[62.5px] w-[220px]" data-name="Container">
      <Heading8 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[120px] left-0 overflow-clip rounded-[14px] top-0 w-[220px]" data-name="Container">
      <ImageMonsteraBeach />
      <Container30 />
      <Button1 />
      <Container32 />
    </div>
  );
}

function ImageCocoBeach() {
  return (
    <div className="absolute h-[120px] left-0 top-0 w-[220px]" data-name="Image (Coco Beach)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageCocoBeach} />
    </div>
  );
}

function Container34() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[120px] left-0 to-[rgba(0,0,0,0)] top-0 w-[220px]" data-name="Container" />;
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p32a9af80} id="Vector" stroke="var(--stroke-0, #14294A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[184px] rounded-[3.35544e+07px] size-[28px] top-[8px]" data-name="Button">
      <Icon19 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Jost:SemiBold',sans-serif] font-semibold grow leading-[21px] min-h-px min-w-px relative shrink-0 text-[14px] text-white">Coco Beach</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[47.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[13.5px] items-start relative w-[47.109px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">💨 24 km/h</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[49.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[13.5px] items-start relative w-[49.016px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">🌊 1.5-2.1 m</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[32.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[13.5px] items-start relative w-[32.625px]">
        <p className="basis-0 font-['Jost:Regular',sans-serif] font-normal grow leading-[13.5px] min-h-px min-w-px relative shrink-0 text-[9px] text-[rgba(255,255,255,0.9)]">🌡️ 20°C</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[6px] h-[13.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Text21 />
      <Text22 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[3px] h-[57.5px] items-start left-0 pb-0 pt-[10px] px-[10px] top-[62.5px] w-[220px]" data-name="Container">
      <Heading9 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[120px] left-[230px] overflow-clip rounded-[14px] top-0 w-[220px]" data-name="Container">
      <ImageCocoBeach />
      <Container34 />
      <Button2 />
      <Container36 />
    </div>
  );
}

function ImageMoonLake() {
  return (
    <div className="absolute h-[120px] left-0 top-0 w-[220px]" data-name="Image (Moon Lake)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGaleGateDashboard} />
    </div>
  );
}

function Container38() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[120px] left-0 to-[rgba(0,0,0,0)] top-0 w-[220px]" data-name="Container" />;
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p32a9af80} id="Vector" stroke="var(--stroke-0, #14294A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[184px] rounded-[3.35544e+07px] size-[28px] top-[8px]" data-name="Button">
      <Icon20 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Jost:SemiBold',sans-serif] font-semibold grow leading-[21px] min-h-px min-w-px relative shrink-0 text-[14px] text-white">Moon Lake</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[45.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[13.5px] items-start relative w-[45.719px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">💨 13 km/h</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[50.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[13.5px] items-start relative w-[50.422px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">🌊 0.9-1.5 m</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[31.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[13.5px] items-start relative w-[31.344px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">🌡️ 19°C</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[6px] h-[13.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text23 />
      <Text24 />
      <Text25 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[3px] h-[57.5px] items-start left-0 pb-0 pt-[10px] px-[10px] top-[62.5px] w-[220px]" data-name="Container">
      <Heading10 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[120px] left-[460px] overflow-clip rounded-[14px] top-0 w-[220px]" data-name="Container">
      <ImageMoonLake />
      <Container38 />
      <Button3 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[124px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container37 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-white relative rounded-[3.35544e+07px] shrink-0 size-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[6px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative rounded-[3.35544e+07px] shrink-0 size-[6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[6px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[6px] h-[6px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container43 />
      {[...Array(2).keys()].map((_, i) => (
        <Container44 key={i} />
      ))}
    </div>
  );
}

function GaleGateDashboard9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="GaleGateDashboard">
      <Container42 />
      <Container46 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1066" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[67.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.5px] items-start relative w-[67.406px]">
        <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre">More Spots</p>
      </div>
    </div>
  );
}

function GaleGateDashboard10() {
  return (
    <div className="bg-[#2c4a6b] content-stretch flex gap-[6px] h-[39.5px] items-center justify-center relative rounded-[12px] shrink-0 w-full" data-name="GaleGateDashboard">
      <Icon21 />
      <Text26 />
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[10px] h-[256px] items-start pb-0 pt-[16px] px-[16px] relative rounded-[20px] shrink-0 w-[387px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <GaleGateDashboard8 />
      <GaleGateDashboard9 />
      <GaleGateDashboard10 />
    </div>
  );
}

function Container48() {
  return (
    <div 
      className="absolute box-border content-stretch flex flex-col gap-[12px] h-[626px] items-start left-0 overflow-y-auto px-[24px] py-0 top-[155.64px] w-[393px] [&::-webkit-scrollbar]:hidden" 
      data-name="Container" 
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <Container4 />
      <Container27 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return <div className="absolute h-0 left-[40px] top-[19.5px] w-[265px]" data-name="Container" />;
}

function Container50() {
  return <div className="absolute left-0 size-[40px] top-0" data-name="Container" />;
}

function Image() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-32.08%] max-w-none top-0 w-[150%]" src={imgImage} />
      </div>
    </div>
  );
}

function PrimitiveImg() {
  return (
    <div className="absolute left-[305px] overflow-clip rounded-[3.35544e+07px] size-[40px] top-0" data-name="PrimitiveImg">
      <Container50 />
      <Image />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[40px] left-[23.55px] top-[56.82px] w-[345px]" data-name="Container1">
      <Container49 />
      <PrimitiveImg />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Black',sans-serif] font-black leading-[36px] left-0 text-[24px] text-nowrap text-white top-0 tracking-[0.0703px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[36px] items-start left-[24px] pl-0 pr-[35.484px] py-0 top-[111.64px] w-[152.375px]" data-name="Heading">
      <Paragraph1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[3.42%] contents left-0 right-[0.28%] top-0" data-name="Group">
      <div className="absolute bottom-[8.96%] left-0 right-[97.35%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
          <path d={svgPaths.p136c1280} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.7%_95.99%_22.72%_3.25%]" data-name="Vector_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 8">
          <path d={svgPaths.p2200800} fill="var(--fill-0, white)" id="Vector_2" />
        </svg>
      </div>
      <div className="absolute inset-[2.16%_92.67%_11.12%_4.6%]" data-name="Vector_3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 11">
          <path d={svgPaths.p33997200} fill="var(--fill-0, white)" id="Vector_3" />
        </svg>
      </div>
      <div className="absolute inset-[2.16%_90.72%_11.12%_7.76%]" data-name="Vector_4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 11">
          <path d={svgPaths.p206a400} fill="var(--fill-0, white)" id="Vector_4" />
        </svg>
      </div>
      <div className="absolute inset-[35.04%_0.28%_32.5%_99.3%]" data-name="Vector_5">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
          <path d={svgPaths.p32473672} fill="var(--fill-0, white)" id="Vector_5" />
        </svg>
      </div>
      <div className="absolute inset-[11.96%_1.62%_18.81%_91.98%]" data-name="Vector_6">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
          <path d={svgPaths.p33b64800} fill="var(--fill-0, white)" id="Vector_6" />
        </svg>
      </div>
      <div className="absolute inset-[4.27%_10.77%_4.71%_84.05%]" data-name="Vector_7">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
          <path d={svgPaths.p1fbb9c00} fill="var(--fill-0, white)" id="Vector_7" />
        </svg>
      </div>
      <div className="absolute inset-[19.65%_19.91%_3.42%_79.17%]" data-name="Vector_8">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
          <path d={svgPaths.p3d5b5f80} fill="var(--fill-0, white)" id="Vector_8" />
        </svg>
      </div>
      <div className="absolute inset-[4.27%_18.39%_3.42%_80.7%]" data-name="Vector_9">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 12">
          <path d={svgPaths.p2182ca70} fill="var(--fill-0, white)" id="Vector_9" />
        </svg>
      </div>
      <div className="absolute inset-[46.57%_21.44%_3.42%_77.65%]" data-name="Vector_10">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 7">
          <path d={svgPaths.p35e64e00} fill="var(--fill-0, white)" id="Vector_10" />
        </svg>
      </div>
      <div className="absolute inset-[65.81%_22.96%_3.42%_76.13%]" data-name="Vector_11">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
          <path d={svgPaths.p26be5600} fill="var(--fill-0, white)" id="Vector_11" />
        </svg>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[12.563px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12.563px] items-start left-[33px] overflow-clip top-[19.44px] w-[326.094px]" data-name="Group">
      <Icon22 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[24px]">
        <div className="absolute inset-[20.83%_8.33%_20.83%_8.34%]" data-name="Vector">
          <div className="absolute inset-[-5.36%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
              <path d={svgPaths.p4c3fa80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[15px] relative shrink-0 w-[35.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-[35.297px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] text-nowrap whitespace-pre">Weather</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[42px] relative shrink-0 w-[35.297px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3px] h-[42px] items-center relative w-[35.297px]">
        <Icon23 />
        <Text27 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[24px]">
        <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.688%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p11785900} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.5" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[69.38%_12.5%_12.5%_69.38%]" data-name="Vector">
          <div className="absolute inset-[-12.191%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <path d={svgPaths.p2647f00} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.5" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[15px] relative shrink-0 w-[50.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-[50.797px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] text-nowrap whitespace-pre">Spot Search</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[42px] relative shrink-0 w-[50.797px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3px] h-[42px] items-center relative w-[50.797px]">
        <Icon24 />
        <Text28 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[24px]">
        <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
              <path d={svgPaths.p3591cd80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-9.69%_-25.03%_-9.69%_-25.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
              <path d={svgPaths.p3c522900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-12.78%_-25%_-12.78%_-25.01%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
              <path d={svgPaths.p2fdc5c} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-9.375%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.p1f8c1310} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[15px] relative shrink-0 w-[47.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-[47.813px]">
        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] text-nowrap whitespace-pre">Community</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[42px] relative shrink-0 w-[47.813px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3px] h-[42px] items-center relative w-[47.813px]">
        <Icon25 />
        <Text29 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[69px] items-center justify-between px-[56.516px] py-0 relative w-full">
          <Button4 />
          <Button5 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[#14294a] box-border content-stretch flex flex-col items-start left-0 pb-0 pt-px px-0 top-[782px] w-[393px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container51 />
    </div>
  );
}

interface GaleGateDashboardProps {
  onNavigateToSpotSearch?: () => void;
  onNavigateToCommunity?: () => void;
  onNavigateToWeather?: () => void;
  onNavigateToFavorites?: () => void;
  onNavigateToProfile?: () => void;
}

export default function GaleGateDashboard11({
  onNavigateToSpotSearch,
  onNavigateToCommunity,
  onNavigateToWeather,
  onNavigateToFavorites,
  onNavigateToProfile,
}: GaleGateDashboardProps) {
  return (
    <div className="bg-gradient-to-b from-[#1a3a52] relative to-[#1a3a52] via-50% via-[#2c4a6b]" style={{ width: '393px', height: '852px' }} data-name="GaleGateDashboard">
      <Container52 />
      <Container48 />
      <Container1 />
      <Heading />
      <Group1 />
    </div>
  );
}