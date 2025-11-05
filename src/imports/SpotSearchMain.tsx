import { useState } from 'react';
import svgPaths from "./svg-tg0y5bjff7";
import imgImageMagnoliaBeach from "figma:asset/37b05fe0c7d72591f3c4ae1c5554346eb9be016b.png";
import imgImageMoonLake from "figma:asset/58b97f8343d04a49b10540f9332b3669bd71aa4d.png";
import imgImageCocoBeach from "figma:asset/f2e35e08df70908a68c771fcb055b226eb278db7.png";
import imgImageBcSurfBeach from "figma:asset/aef819a809c4c0a89e878c5c22df5b5212ac94c2.png";
import imgImageMaffiLake from "figma:asset/111fcb0be2e4d39d7746cd1f4a0f93a49888dcba.png";
import imgImagePihiBeach from "figma:asset/8a3877f372257f108a76174478c756d104bfe9c2.png";
import imgImageBcSurfBeach1 from "figma:asset/7b6747f75bbfb2dd174238a75fd926fc4a2a4efa.png";
import imgImageMaffiLake1 from "figma:asset/5d46d251bee9edf8821269a3bee8f012b1b027bc.png";
import { Home, Heart, SlidersHorizontal, User } from 'lucide-react';

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <button className="relative shrink-0 size-[40px] transition-transform active:scale-90 cursor-pointer" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon />
      </div>
    </button>
  );
}

function Heading() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-full">
        <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[28px] left-[132.83px] text-[20px] text-center text-nowrap text-white top-[-1px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Explore Spots
        </p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 5V19M5 12H19" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <button className="relative shrink-0 size-[40px] transition-transform active:scale-90 cursor-pointer" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon1 />
      </div>
    </button>
  );
}

function Container() {
  return (
    <div className="absolute box-border content-stretch flex h-[128px] items-center justify-between left-0 px-[24px] py-0 top-0 w-[393px]" data-name="Container">
      <Button />
      <Heading />
      <Button1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M21 21L16.66 16.66" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p19568f00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Search for spots...</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 19V22" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1fc92080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18608f80} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <button className="relative shrink-0 size-[24px] transition-transform active:scale-90 cursor-pointer" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon3 />
      </div>
    </button>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p27c543b0} id="Vector" stroke="var(--stroke-0, #4FC3F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, #4FC3F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[12px] h-[48px] items-center left-[24px] px-[20px] py-0 rounded-[3.35544e+07px] top-[128px] w-[345px] transition-shadow hover:shadow-lg cursor-text" data-name="Container">
      <Icon2 />
      <TextInput />
      <Button2 />
      <Icon4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[28px] left-0 text-[18px] text-nowrap text-white top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Top Rated Spots
      </p>
    </div>
  );
}

function ImageMagnoliaBeach() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[220px]" data-name="Image (Magnolia Beach)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageMagnoliaBeach} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[96px] left-0 top-0 w-[220px]" data-name="Container" />;
}

function Icon5({ filled }: { filled?: boolean }) {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_11.04%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-2.72%_-2.5%_-3.68%_-2.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            <path d={svgPaths.p219a5a00} fill={filled ? "var(--fill-0, #D7263D)" : "none"} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3({ isFavorited, onToggle }: { isFavorited: boolean; onToggle: () => void }) {
  return (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className="absolute content-stretch flex flex-col items-start left-[194px] size-[18px] top-[8px] transition-transform hover:scale-125 active:scale-110 cursor-pointer z-10" 
      data-name="Container"
    >
      <Icon5 filled={isFavorited} />
    </button>
  );
}

function Paragraph() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[15px] left-0 text-[10px] text-black text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PERFECT WIND
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#fdc700] box-border content-stretch flex flex-col h-[19px] items-start left-[8px] pb-0 pl-[8px] pr-[9px] pt-[2px] rounded-[4px] top-[8px] w-[85.281px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container5({ isFavorited, onToggleFavorite }: { isFavorited: boolean; onToggleFavorite: () => void }) {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <ImageMagnoliaBeach />
      <Container2 />
      <Container3 isFavorited={isFavorited} onToggle={onToggleFavorite} />
      <Container4 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[204px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[16px] left-0 text-[#1d1b20] text-[14px] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Magnolia Beach
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[204px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[#1d1b20] text-[10px] text-nowrap top-0 tracking-[0.1172px] whitespace-pre">12.5 km away</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#d4e8f5] box-border content-stretch flex flex-col h-[47px] items-start pb-0 pt-[8px] px-[8px] relative shrink-0" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container7({ isFavorited, onToggleFavorite }: { isFavorited: boolean; onToggleFavorite: () => void }) {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[16px] shrink-0 w-[220px] transition-transform hover:scale-105 cursor-pointer" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[220px]">
        <Container5 isFavorited={isFavorited} onToggleFavorite={onToggleFavorite} />
        <Container6 />
      </div>
    </div>
  );
}

function ImageMoonLake() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[220px]" data-name="Image (Moon Lake)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageMoonLake} />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[96px] left-0 top-0 w-[220px]" data-name="Container" />;
}

function Icon6({ filled }: { filled?: boolean }) {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_11.04%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.45%_-5%_-7.36%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
            <path d={svgPaths.p2eb05480} id="Vector" fill={filled ? "#D7263D" : "none"} stroke="var(--stroke-0, white)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9({ isFavorited, onToggle }: { isFavorited: boolean; onToggle: () => void }) {
  return (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className="absolute content-stretch flex flex-col items-start left-[194px] size-[18px] top-[8px] transition-transform hover:scale-125 active:scale-110 cursor-pointer z-10" 
      data-name="Container"
    >
      <Icon6 filled={isFavorited} />
    </button>
  );
}

function Container10({ isFavorited, onToggleFavorite }: { isFavorited: boolean; onToggleFavorite: () => void }) {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <ImageMoonLake />
      <Container8 />
      <Container9 isFavorited={isFavorited} onToggle={onToggleFavorite} />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[204px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[16px] left-0 text-[#1d1b20] text-[14px] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Moon Lake
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[204px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[#1d1b20] text-[10px] text-nowrap top-0 tracking-[0.1172px] whitespace-pre">8.3 km away</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#d4e8f5] box-border content-stretch flex flex-col h-[47px] items-start pb-0 pt-[8px] px-[8px] relative shrink-0" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Container12({ isFavorited, onToggleFavorite }: { isFavorited: boolean; onToggleFavorite: () => void }) {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[143px] relative rounded-[14px] shrink-0 w-[220px] transition-transform hover:scale-105 cursor-pointer" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[143px] items-start overflow-clip relative rounded-[inherit] w-[220px]">
        <Container10 isFavorited={isFavorited} onToggleFavorite={onToggleFavorite} />
        <Container11 />
      </div>
    </div>
  );
}

function Container13({ favorites, onToggleFavorite }: { favorites: string[]; onToggleFavorite: (id: string) => void }) {
  return (
    <div className="content-stretch flex gap-[12px] h-[162px] items-start overflow-clip relative shrink-0 w-[377px]" data-name="Container">
      <Container7 isFavorited={favorites.includes('magnolia')} onToggleFavorite={() => onToggleFavorite('magnolia')} />
      <Container12 isFavorited={favorites.includes('moonlake')} onToggleFavorite={() => onToggleFavorite('moonlake')} />
    </div>
  );
}

function Container14({ favorites, onToggleFavorite }: { favorites: string[]; onToggleFavorite: (id: string) => void }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[206px] items-start left-0 px-[16px] py-0 top-[200px] w-[393px]" data-name="Container">
      <Heading1 />
      <Container13 favorites={favorites} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[28px] left-0 text-[18px] text-nowrap text-white top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nearby Spots
      </p>
    </div>
  );
}

function ImageCocoBeach() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[165px]" data-name="Image (Coco Beach)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageCocoBeach} />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[96px] left-0 top-0 w-[165px]" data-name="Container" />;
}

function Icon7() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_11.04%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-2.72%_-2.5%_-3.68%_-2.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            <path d={svgPaths.p219a5a00} fill="var(--fill-0, #D7263D)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[139px] size-[18px] top-[8px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <ImageCocoBeach />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[149px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[16px] left-0 text-[14px] text-black text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Coco Beach
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[149px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-black text-nowrap top-0 tracking-[0.1172px] whitespace-pre">0.5 km away</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#d4e8f5] box-border content-stretch flex flex-col h-[47px] items-start pb-0 pt-[8px] px-[8px] relative shrink-0" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-black h-[143px] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[165px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[143px] items-start overflow-clip relative rounded-[inherit] w-[165px]">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function ImageBcSurfBeach() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[165px]" data-name="Image (BC Surf Beach)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBcSurfBeach} />
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[96px] left-0 top-0 w-[165px]" data-name="Container" />;
}

function Icon8() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_11.04%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-2.72%_-2.5%_-3.68%_-2.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            <path d={svgPaths.p219a5a00} fill="var(--fill-0, #D7263D)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[139px] size-[18px] top-[8px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <ImageBcSurfBeach />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[149px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[16px] left-0 text-[14px] text-black text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        BC Surf Beach
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[149px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-black text-nowrap top-0 tracking-[0.1172px] whitespace-pre">0.5 km away</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#d4e8f5] box-border content-stretch flex flex-col h-[47px] items-start pb-0 pt-[8px] px-[8px] relative shrink-0" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-black h-[143px] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[165px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[143px] items-start overflow-clip relative rounded-[inherit] w-[165px]">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function ImageMaffiLake() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[165px]" data-name="Image (Maffi Lake)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageMaffiLake} />
    </div>
  );
}

function Container25() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[96px] left-0 top-0 w-[165px]" data-name="Container" />;
}

function Icon9() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_11.04%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-2.72%_-2.5%_-3.68%_-2.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            <path d={svgPaths.p219a5a00} fill="var(--fill-0, #D7263D)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[139px] size-[18px] top-[8px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[96px] relative shrink-0 w-[165px]" data-name="Container">
      <ImageMaffiLake />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[16px] left-0 text-[14px] text-black text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Maffi Lake
      </p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-black text-nowrap top-0 tracking-[0.1172px] whitespace-pre">0.5 km away</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#d4e8f5] box-border content-stretch flex flex-col h-[47px] items-start pb-0 pt-[8px] px-[8px] relative shrink-0 w-[165px]" data-name="Container">
      <Paragraph9 />
      <Paragraph10 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-black h-[143px] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[143px] items-start overflow-clip relative rounded-[inherit]">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[12px] h-[162px] items-start overflow-clip relative shrink-0 w-[377px]" data-name="Container">
      <Container19 />
      <Container24 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[206px] items-start left-[-0.88px] px-[16px] py-0 top-[391.6px] w-[393px]" data-name="Container">
      <Heading2 />
      <Container30 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[28px] left-0 text-[18px] text-nowrap text-white top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Popular Kitsurfing
      </p>
    </div>
  );
}

function ImagePihiBeach() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[170.656px]" data-name="Image (Pihi Beach)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagePihiBeach} />
    </div>
  );
}

function Container32() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[96px] left-0 top-0 w-[170.656px]" data-name="Container" />;
}

function Icon10() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_11.04%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-2.72%_-2.5%_-3.68%_-2.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            <path d={svgPaths.p219a5a00} fill="var(--fill-0, #D7263D)" id="Vector" stroke="var(--stroke-0, #1D1B20)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[144.66px] size-[18px] top-[8px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <ImagePihiBeach />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[16px] left-0 text-[#1d1b20] text-[14px] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pihi Beach
      </p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[#1d1b20] text-[10px] text-nowrap top-0 tracking-[0.1172px] whitespace-pre">0.5 km away</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#d4e8f5] h-[47px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[47px] items-start pb-0 pt-[8px] px-[8px] relative w-full">
          <Paragraph11 />
          <Paragraph12 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[143px] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[170.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[143px] items-start overflow-clip relative rounded-[inherit] w-[170.656px]">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function ImageBcSurfBeach1() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[165px]" data-name="Image (BC Surf Beach)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBcSurfBeach1} />
    </div>
  );
}

function Container37() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[96px] left-0 top-0 w-[165px]" data-name="Container" />;
}

function Icon11() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_11.04%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-2.72%_-2.5%_-3.68%_-2.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            <path d={svgPaths.p219a5a00} fill="var(--fill-0, #D7263D)" id="Vector" stroke="var(--stroke-0, #1D1B20)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[139px] size-[18px] top-[8px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <ImageBcSurfBeach1 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[16px] left-0 text-[#1d1b20] text-[14px] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        BC Surf Beach
      </p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[#1d1b20] text-[10px] text-nowrap top-0 tracking-[0.1172px] whitespace-pre">0.5 km away</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#d4e8f5] h-[47px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[47px] items-start pb-0 pt-[8px] px-[8px] relative w-full">
          <Paragraph13 />
          <Paragraph14 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[143px] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[165px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[143px] items-start overflow-clip relative rounded-[inherit] w-[165px]">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function ImageMaffiLake1() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[165px]" data-name="Image (Maffi Lake)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageMaffiLake1} />
    </div>
  );
}

function Container42() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[96px] left-0 top-0 w-[165px]" data-name="Container" />;
}

function Icon12() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_11.04%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-2.72%_-2.5%_-3.68%_-2.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            <path d={svgPaths.p219a5a00} fill="var(--fill-0, #D7263D)" id="Vector" stroke="var(--stroke-0, #1D1B20)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[139px] size-[18px] top-[8px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <ImageMaffiLake1 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[16px] left-0 text-[#1d1b20] text-[14px] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Maffi Lake
      </p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[15px] left-0 not-italic text-[#1d1b20] text-[10px] text-nowrap top-0 tracking-[0.1172px] whitespace-pre">0.5 km away</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#d4e8f5] h-[47px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[47px] items-start pb-0 pt-[8px] px-[8px] relative w-full">
          <Paragraph15 />
          <Paragraph16 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[143px] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[165px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[143px] items-start overflow-clip relative rounded-[inherit] w-[165px]">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[162px] items-start left-[15px] overflow-clip top-[36px]" data-name="Container">
      <Container36 />
      <Container41 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[206px] items-start left-[-0.88px] px-[16px] py-0 top-[592.5px] w-[393px]" data-name="Container">
      <Heading3 />
      <Container47 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[0.28%] top-[3.42%]" data-name="Group">
      <div className="absolute bottom-[5.53%] left-0 right-[97.35%] top-[3.42%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
          <path d={svgPaths.p4495700} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_95.99%_19.29%_3.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
          <path d={svgPaths.pc8f1a00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.59%_92.67%_7.69%_4.6%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
          <path d={svgPaths.p2744a380} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.59%_90.72%_7.69%_7.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 12">
          <path d={svgPaths.p16d8f680} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.46%_0.28%_29.07%_99.3%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
          <path d={svgPaths.pb1b1b00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.38%_1.62%_15.38%_91.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
          <path d={svgPaths.p1cac8a00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.69%_10.77%_1.28%_84.05%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
          <path d={svgPaths.p2f9f3840} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[79.17%] right-[19.91%] top-[23.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
          <path d={svgPaths.pe71fa80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[80.7%] right-[18.39%] top-[7.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 12">
          <path d={svgPaths.p3c2ec00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[77.65%] right-[21.43%] top-1/2" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 7">
          <path d={svgPaths.p1e958840} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[76.13%] right-[22.96%] top-[69.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
          <path d={svgPaths.p22835000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13px] items-start left-[33px] top-[18px] w-[327px]" data-name="StatusBar">
      <Icon13 />
    </div>
  );
}

function NavButton({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-[6px] flex-1 transition-all active:scale-95 cursor-pointer" 
      data-name="NavButton"
    >
      <div className={`size-[31px] transition-all ${active ? 'text-white scale-110' : 'text-white/60'}`}>
        {icon}
      </div>
      <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic text-[10px] text-nowrap tracking-[0.1172px] transition-all ${active ? 'text-white' : 'text-white/60'}`}>
        {label}
      </p>
    </button>
  );
}

function Container49({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  return (
    <div className="absolute bg-gradient-to-r from-[#294666] to-[#36547a] h-[72px] left-0 top-[780px] w-[393px] flex items-center justify-around px-8" data-name="Container">
      <NavButton 
        icon={<Home className="size-full" strokeWidth={1.5} />}
        label="Home"
        active={activeTab === 'home'}
        onClick={() => onTabChange('home')}
      />
      <NavButton 
        icon={<Heart className="size-full" strokeWidth={1.5} />}
        label="Favorites"
        active={activeTab === 'favorites'}
        onClick={() => onTabChange('favorites')}
      />
      <NavButton 
        icon={<SlidersHorizontal className="size-full" strokeWidth={1.5} />}
        label="Filter"
        active={activeTab === 'filter'}
        onClick={() => onTabChange('filter')}
      />
      <NavButton 
        icon={<User className="size-full" strokeWidth={1.5} />}
        label="Profile"
        active={activeTab === 'profile'}
        onClick={() => onTabChange('profile')}
      />
    </div>
  );
}

function SpotSearchScreen() {
  const [activeTab, setActiveTab] = useState('home');
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (spotId: string) => {
    setFavorites(prev => 
      prev.includes(spotId) 
        ? prev.filter(id => id !== spotId)
        : [...prev, spotId]
    );
  };

  return (
    <div className="bg-gradient-to-b from-[#0c2b4e] from-[50.481%] h-[852px] overflow-clip relative shrink-0 to-[#365386] w-[393px]" data-name="SpotSearchScreen">
      <Container />
      <Container1 />
      <Container14 favorites={favorites} onToggleFavorite={toggleFavorite} />
      <Container31 />
      <Container48 />
      <StatusBar />
      <Container49 activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default function SpotSearchMain() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[393px] h-[852px]" data-name="Spot Search - Main">
      <SpotSearchScreen />
    </div>
  );
}