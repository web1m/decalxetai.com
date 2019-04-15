import React from 'react'
import '../../lib/ui/app.css'
import '../../lib/admin/animate.css'
import './layout.css'
import Head from 'next/head'

export default props => (
  <>
    <Head>
      <title>{props.title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/global/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/img/favicon.png"
        sizes="32x32"
      />
    </Head>

    <div>{props.children}</div>

    <div
      dangerouslySetInnerHTML={{
        __html: `
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v3.2'
        });
      };
    
      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
    
    <!-- Your customer chat code -->
    <div class="fb-customerchat"
      attribution=setup_tool
      page_id="1796643663768775">
    </div>
    `
      }}
    />
  </>
)
