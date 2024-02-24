import { LucideProps, Search } from 'lucide-react';

export const Icons = {
  Search: Search,
  AppLogo: (props: LucideProps) => (
    <svg
      width="79"
      height="74"
      viewBox="0 0 79 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="79" height="74" rx="37" fill="#133B43" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.0348 10.2158C40.2333 10.429 40.2343 10.4497 40.2343 14.4555V18.4811L40.0219 18.6823C39.7308 18.9579 39.2286 18.9518 38.9652 18.6693C38.7667 18.4562 38.7657 18.4355 38.7657 14.4296V10.4041L38.9781 10.2029C39.2692 9.92725 39.7714 9.93336 40.0348 10.2158ZM55.8878 16.7511C56.1487 16.8577 56.2868 17.0477 56.3558 17.3956C56.4134 17.6863 56.3423 17.7677 53.6255 20.517C52.0913 22.0696 50.7412 23.3778 50.6252 23.424C50.1087 23.63 49.479 22.988 49.6846 22.4651C49.8192 22.1225 55.3173 16.6623 55.5209 16.6688C55.6199 16.6721 55.785 16.7091 55.8878 16.7511ZM26.4343 19.4488C27.9746 20.9952 29.2712 22.3525 29.3154 22.4651C29.506 22.9496 28.9553 23.5854 28.4548 23.4587C28.3363 23.4287 26.9671 22.1194 25.4121 20.5492C22.6303 17.74 22.5859 17.6893 22.6459 17.3871C22.7232 16.9973 22.9422 16.7765 23.329 16.6986C23.6286 16.6382 23.6799 16.6836 26.4343 19.4488ZM41.6846 20.5157C42.4006 20.8777 42.7048 21.4816 42.8559 22.8406C42.9278 23.4877 42.9017 23.4583 43.7133 23.8067L44.3008 24.059L44.9134 23.6099C45.7063 23.0286 46.0174 22.8708 46.5029 22.8037C47.2117 22.7058 47.6832 22.9971 48.9942 24.3429C49.6305 24.9962 50.2124 25.6781 50.2871 25.8585C50.439 26.2249 50.4666 26.9898 50.3401 27.3251C50.2946 27.446 50.0062 27.8807 49.6994 28.2912L49.1414 29.0375L49.3603 29.5798C49.4807 29.8781 49.6348 30.1504 49.7028 30.185C49.7708 30.2196 50.2295 30.3092 50.7223 30.384C51.6919 30.5313 52.0444 30.7179 52.4589 31.3038C52.6631 31.5922 52.6731 31.6856 52.6999 33.5655C52.7239 35.2519 52.7063 35.5691 52.5744 35.8321C52.2001 36.5783 51.71 36.8672 50.5521 37.0244C50.1025 37.0855 49.6979 37.1687 49.6531 37.2093C49.6082 37.2499 49.4547 37.5621 49.3119 37.9032L49.0524 38.5233L49.5872 39.2735C49.8813 39.6862 50.174 40.1851 50.2375 40.3823C50.3807 40.8267 50.3028 41.4715 50.0573 41.8717C49.7745 42.3329 47.6061 44.4158 47.2546 44.5638C46.901 44.7127 46.1397 44.7383 45.8111 44.6124C45.6912 44.5665 45.2594 44.2754 44.8516 43.9656L44.1099 43.4023L43.6178 43.6016C43.3472 43.7111 43.0797 43.8461 43.0235 43.9015C42.9672 43.9568 42.8717 44.3728 42.8114 44.826C42.6561 45.9927 42.3695 46.487 41.629 46.8643C41.3679 46.9974 41.0527 47.015 39.3727 46.9908L37.4199 46.9626L37.0895 46.7084C36.5241 46.2733 36.3679 45.9639 36.2224 44.989C36.1488 44.4971 36.0611 44.0399 36.0274 43.973C35.9937 43.9062 35.6811 43.7305 35.3326 43.5825L34.6992 43.3136L34.056 43.7852C32.8958 44.6357 32.3138 44.7703 31.4933 44.3778C31.0629 44.172 28.8813 41.9203 28.7086 41.5036C28.5604 41.1462 28.5347 40.3791 28.6599 40.0474C28.7054 39.9266 28.9938 39.4919 29.3006 39.0814L29.8586 38.3351L29.6397 37.7928C29.5193 37.4945 29.3652 37.2221 29.2972 37.1875C29.2292 37.1529 28.7705 37.0634 28.2777 36.9885C27.3081 36.8412 26.9556 36.6546 26.5411 36.0688C26.3335 35.7755 26.3281 35.7154 26.3281 33.6863C26.3281 31.6572 26.3335 31.597 26.5411 31.3038C26.9556 30.7179 27.3081 30.5313 28.2777 30.384C28.7705 30.3092 29.2279 30.2201 29.2942 30.1862C29.3605 30.1522 29.5346 29.8375 29.6812 29.4868L29.9476 28.8493L29.4128 28.099C28.6223 26.9901 28.5069 26.4351 28.8955 25.6098C29.0975 25.1808 31.334 22.9821 31.7442 22.8093C32.155 22.6362 32.811 22.6405 33.2346 22.8188C33.4202 22.897 33.87 23.1869 34.2339 23.4631L34.8958 23.9652L35.4298 23.7462C35.7236 23.6257 35.992 23.4711 36.0263 23.4026C36.0606 23.3341 36.1495 22.8717 36.2237 22.3751C36.3699 21.3977 36.555 21.0424 37.1362 20.6246C37.4233 20.4182 37.5101 20.4091 39.4082 20.3863C41.0933 20.366 41.4259 20.385 41.6846 20.5157ZM40.9965 22.0962C41.0194 22.1356 41.1073 22.6882 41.192 23.3243C41.2767 23.9604 41.3818 24.5694 41.4257 24.6777C41.4832 24.82 41.6921 24.9317 42.1779 25.0795C42.5477 25.1922 43.1616 25.447 43.5421 25.6458C43.9225 25.8447 44.3093 26.0073 44.4017 26.0073C44.494 26.0073 45.0248 25.6704 45.5809 25.2586C46.3303 24.7036 46.6307 24.53 46.7407 24.5878C46.8223 24.6306 47.3172 25.1102 47.8405 25.6533L48.7919 26.6408L47.9555 27.7607L47.1191 28.8805L47.4778 29.5995C47.675 29.995 47.9268 30.6184 48.0372 30.9849C48.1476 31.3513 48.285 31.6804 48.3423 31.7161C48.3997 31.7519 49.0256 31.8664 49.7331 31.9704L51.0197 32.1597V33.6863V35.2128L49.7331 35.4021C49.0256 35.5062 48.3997 35.6206 48.3423 35.6565C48.285 35.6922 48.1481 36.0233 48.0381 36.3923C47.9282 36.7613 47.6549 37.4128 47.4309 37.8401C46.96 38.738 46.9007 38.5046 47.9704 39.9657C48.4408 40.6082 48.5851 40.8718 48.5274 40.9833C48.4846 41.0662 48.0088 41.5654 47.47 42.0927L46.4905 43.0515L45.4534 42.2546C44.883 41.8164 44.3418 41.4578 44.2507 41.4578C44.1595 41.4578 43.8053 41.5997 43.4637 41.7731C43.122 41.9465 42.5447 42.1796 42.1807 42.291C41.8169 42.4024 41.4901 42.5409 41.4547 42.5987C41.4191 42.6565 41.3056 43.2874 41.2023 44.0005L41.0145 45.2973H39.5H37.9855L37.7977 44.0005C37.6944 43.2874 37.5809 42.6565 37.5453 42.5987C37.5099 42.5409 37.1834 42.4025 36.8198 42.2912C36.4562 42.1799 35.8375 41.926 35.4449 41.727C35.0522 41.5281 34.6634 41.3653 34.5807 41.3653C34.498 41.3653 33.9752 41.7022 33.4191 42.114C32.6697 42.6689 32.3693 42.8426 32.2593 42.7848C32.1777 42.7419 31.6828 42.2624 31.1595 41.7192L30.2081 40.7318L31.0445 39.6119L31.8809 38.492L31.5222 37.7731C31.325 37.3776 31.0732 36.7542 30.9628 36.3877C30.8524 36.0212 30.715 35.6922 30.6577 35.6565C30.6003 35.6206 29.9744 35.5062 29.2669 35.4021L27.9803 35.2128V33.6863V32.1597L29.2669 31.9704C29.9744 31.8664 30.6003 31.7519 30.6577 31.7161C30.715 31.6804 30.8524 31.3513 30.9628 30.9849C31.0732 30.6184 31.3351 29.9834 31.5446 29.5738C31.7542 29.1642 31.9376 28.8045 31.9523 28.7743C31.9669 28.7442 31.6229 28.228 31.1879 27.6273C30.6049 26.8224 30.4171 26.4961 30.4736 26.3868C30.5159 26.3053 30.9919 25.8065 31.5314 25.2785L32.5124 24.3183L33.5563 25.1165C34.1305 25.5555 34.671 25.9148 34.7577 25.9148C34.8442 25.9148 35.1947 25.7729 35.5363 25.5995C35.878 25.426 36.4553 25.193 36.8193 25.0816C37.1831 24.9702 37.5099 24.8317 37.5453 24.7739C37.5809 24.716 37.6944 24.0852 37.7977 23.372L37.9855 22.0753L39.4703 22.05C40.2869 22.036 40.9737 22.0568 40.9965 22.0962ZM41.0145 28.1234C42.9671 28.6909 44.5451 30.3123 45.0454 32.2656C45.233 32.998 45.233 34.3745 45.0454 35.107C44.6585 36.6172 43.5368 38.0487 42.1864 38.7557C41.2514 39.2451 40.5371 39.4224 39.5 39.4224C37.9375 39.4224 36.5511 38.8491 35.4644 37.7539C34.3777 36.6586 33.809 35.2611 33.809 33.6863C33.809 32.6409 33.9849 31.921 34.4705 30.9785C35.1763 29.6088 36.5827 28.4893 38.0905 28.0969C38.8443 27.9008 40.2936 27.9139 41.0145 28.1234ZM40.5144 29.7844C42.4711 30.2993 43.8081 32.3545 43.4591 34.3108C43.1629 35.971 41.9448 37.2686 40.3459 37.6271C37.6243 38.2374 35.0599 35.7838 35.5472 33.0355C35.7105 32.1144 36.0973 31.3924 36.7576 30.7762C37.4099 30.1676 37.8182 29.9415 38.6022 29.7553C39.3368 29.5807 39.765 29.5872 40.5144 29.7844ZM62.7987 33.1602C63.0722 33.4537 63.0661 33.9599 62.7859 34.2253C62.5744 34.4254 62.5538 34.4264 58.5795 34.4264H54.5856L54.386 34.2123C54.1125 33.9189 54.1186 33.4127 54.3988 33.1473C54.6103 32.9472 54.6309 32.9461 58.6052 32.9461H62.5991L62.7987 33.1602ZM24.614 33.1602C24.8875 33.4537 24.8814 33.9599 24.6012 34.2253C24.3897 34.4254 24.3691 34.4264 20.3948 34.4264H16.4009L16.2013 34.2123C15.9278 33.9189 15.9339 33.4127 16.2141 33.1473C16.4256 32.9472 16.4462 32.9461 20.4205 32.9461H24.4144L24.614 33.1602Z"
        fill="#14C6EC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.774 52.289C32.4017 52.6853 32.41 53.3687 32.7915 53.727L33.0808 53.9986H39.5175H45.9542L46.226 53.7096C46.5983 53.3133 46.59 52.6299 46.2085 52.2716L45.9192 52H39.4825H33.0458L32.774 52.289ZM33.7737 56.2863C33.4014 56.6825 33.4097 57.3659 33.7912 57.7243C34.0791 57.9945 34.107 57.9958 39.5175 57.9958H44.9546L45.2263 57.7068C45.5986 57.3106 45.5903 56.6272 45.2088 56.2688C44.9209 55.9986 44.893 55.9972 39.4825 55.9972H34.0454L33.7737 56.2863ZM35.5013 60.1412C35.5013 60.222 35.6986 60.6873 35.9398 61.1753C37.7946 64.9275 41.1973 64.944 43.0431 61.2099C43.2936 60.7028 43.4987 60.222 43.4987 60.1412C43.4987 60.0318 42.4803 59.9945 39.5 59.9945C36.5197 59.9945 35.5013 60.0318 35.5013 60.1412Z"
        fill="#14C6EC"
      />
    </svg>
  ),
};