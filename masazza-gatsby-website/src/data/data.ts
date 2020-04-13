import SwedishImg from '../../assets/images/home/swedish-massage.png'
import DeppTissueImg from '../../assets/images/home/deep-tissue.png'
import SportsImg from '../../assets/images/home/sports.png'
import PrenatalImg from '../../assets/images/home/prenatal.png'
import CouplesImg from '../../assets/images/home/couples.png'
import WorkImg from '../../assets/images/home/massage.png'

export const massageTypesImages: Array<string> = [SwedishImg, DeppTissueImg, SportsImg, PrenatalImg, CouplesImg, WorkImg]

import QualifiedIcon from '../../assets/icons/about-us/qualified-icon.svg'
import CheckedIcon from '../../assets/icons/about-us/background-checked-icon.svg'
import SecurePaymentIcon from '../../assets/icons/about-us/secure-payment-icon.svg'
import ScamPreventionIcon from '../../assets/icons/about-us/scam-prevention-icon.svg'
import HealthIcon from '../../assets/icons/about-us/health-icon.svg'
import GuaranteesBackground from '../../assets/images/about-us/guaranties-background.png'

export const guaranteesImages: Array<string> = [
  QualifiedIcon,
  CheckedIcon,
  SecurePaymentIcon,
  ScamPreventionIcon,
  HealthIcon,
  GuaranteesBackground
]


export interface DataTypes {
  [name: string]: string
}
export interface OfferTypes {
  minutes: number
  dollars: number
  description: string
}


