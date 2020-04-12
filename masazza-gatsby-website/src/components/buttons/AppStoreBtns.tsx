import * as React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import AppStoreSvg from '../../../assets/icons/app-store.svg'
import GooglePlaySvg from '../../../assets/icons/google-play.svg'

interface IProps {
  addStoreBtnWrapperCss: string
  addCssBtn: string
}

const AppStoreButtons = ({ addStoreBtnWrapperCss, addCssBtn }: IProps) => (
  <div
    css={css`
      width: 100%;
      display: flex;
      ${addStoreBtnWrapperCss}
    `}
  >
    <Link
      to="/"
      css={css`
        margin: 0 1em;
        width: 30%;
        min-width: 8em;
        max-width: 11em;
        ${addCssBtn}
      `}
    >
      <img src={AppStoreSvg} alt="" />
    </Link>
    <Link
      to="/"
      css={css`
        margin: 0 1em;
        width: 30%;
        min-width: 8em;
        max-width: 11em;
        ${addCssBtn}
      `}
    >
      <img
        src={GooglePlaySvg}
        alt="Google play"
        css={css`
          width: 100%;
        `}
      />
    </Link>
  </div>
)

export default AppStoreButtons
