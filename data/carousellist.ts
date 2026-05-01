import { StaticImageData } from "next/image";
import chanelcloth from "@/public/chanelcloth.jpg";
import dior from "@/public/dior.jpg";
import fendi from "@/public/fendi.jpg";
import givenchy from "@/public/givenchy.jpg";
import guccilogo from "@/public/guccilogo.jpg";
import louisvitton from "@/public/louisvitton.jpg";
import polocloth from "@/public/polocloth.jpg";
import prada from "@/public/prada.jpg";
import rolex from "@/public/rolex.jpg";

interface SponsorData {
  brandimage: StaticImageData;
  brandname: string;
}

export const sponsorlist: SponsorData[] = [
  {
    brandimage: chanelcloth,
    brandname: "CHANEL",
  },
  {
    brandimage: dior,
    brandname: "DIOR",
  },
  {
    brandimage: fendi,
    brandname: "FENDI",
  },
  {
    brandimage: givenchy,
    brandname: "GIVENCHY",
  },
  {
    brandimage: guccilogo,
    brandname: "GUCCI",
  },
  {
    brandimage: louisvitton,
    brandname: "LOUIS VITTON",
  },
  {
    brandimage: polocloth,
    brandname: "POLO",
  },
  {
    brandimage: prada,
    brandname: "PRADA",
  },
  {
    brandimage: rolex,
    brandname: "RLOEX",
  },
];

export const fashionTips: string[] = [
  "WEAR QUALITY CLOTHES",
  "WEAR COMFORTABLE CLOTHES",
  "WEAR ACTIVE WEARS",
  "WEAR HIGH STANDARD WEARS",
];
