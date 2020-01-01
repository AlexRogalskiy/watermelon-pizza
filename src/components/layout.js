import React from "react";
import "../css/css.css";
import { Helmet } from "react-helmet";

export default ({ children, outside, inverted }) => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="user-scalable=0, initial-scale=1.0" />
      <meta
        name="Description"
        content="Hi! I'm Laura González – an artist, speaker,
		developer, and overall disgrace."
      />
      <title>Laura González</title>
      <link rel="shortcut icon" href={require("../css/mushroom.png")}></link>
      <html lang="en" class={inverted && "inverted"} />
    </Helmet>
    {outside}
    <div className="wrapper">{children}</div>
  </>
);
