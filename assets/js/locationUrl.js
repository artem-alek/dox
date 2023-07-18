function generateUrl(version) {
  return window.location.protocol + "//" + window.location.host + "/V" + version;
};

function updateReleaseNoteLinks() {
  $("a#v1_0Link").text(generateUrl("1.0")).attr("href", generateUrl("1.0"));
  $("a#v1_1Link").text(generateUrl("1.1")).attr("href", generateUrl("1.1"));
  $("a#v1_2Link").text(generateUrl("1.2")).attr("href", generateUrl("1.2"));
  $("a#v2_0Link").text(generateUrl("2.0")).attr("href", generateUrl("2.0"));
};

updateReleaseNoteLinks();
