"use strict";
(self.webpackChunkCnblogs_Theme_SimpleMemory =
  self.webpackChunkCnblogs_Theme_SimpleMemory || []).push([
  [7361],
  {
    1087: function (t, e, l) {
      l.d(e, {
        Z: function () {
          return i;
        },
      });
      var o =
          '<div> <nav id="articleDirectory"> <ul class="nav nav-pills"> ##dirHtml## </ul> </nav> </div>',
        n = l(3138);
      function i(t) {
        let e = $("body"),
          l = $("#cnblogs_post_body"),
          i = l.find(":header");
        if (i.length > 0) {
          let s = [];
          $.each(i, function () {
            s.push(parseInt($(this)[0].tagName.replace(/H/g, "")));
          });
          let r = ((a = s), [...new Set(a)]).sort(),
            c = "";
          $.each(i, function () {
            let e = $(this),
              l = parseInt(e[0].tagName.replace(/H/g, ""));
            if (6 === l) return !0;
            let o = e.attr("id"),
              n = "tid-" + t.__tools.randomString(6);
            e.attr("tid", n), e.attr("id", n);
            let i = $('.toc a[href="#' + o + '"]');
            i.length && i.attr("href", "#" + n);
            let a = r.indexOf(l),
              s =
                (0 === a || -1 === a
                  ? ""
                  : "&nbsp;&nbsp;&nbsp;&nbsp;".repeat(a)) +
                e.text().replace(/</g, "&lt;").replace(/>/g, "&gt;");
            c +=
              '<li class="nav-item"><a class="nav-link" href="#' +
              n +
              '" goto="' +
              n +
              '" onclick="return false;">' +
              s +
              "</a></li>";
          });
          let d = t.__tools.tempReplacement(o, "dirHtml", c);
          e.append(d),
            l.attr("data-bs-spy", "scroll"),
            l.attr("data-bs-target", "#articleDirectory"),
            l.attr("data-bs-offset", "0"),
            l.attr("tabindex", "0");
          new n.DA($("#cnblogs_post_body"), { target: "#articleDirectory" });
          t.__config.articleDirectory.autoWidthScroll ||
            ($("#articleDirectory ul li").addClass("articleDirectory-overflow"),
            $("#articleDirectory ul li a").addClass(
              "articleDirectory-overflow"
            )),
            t.__event.scroll.handle.push(() => {
              let e = $("#articleDirectory");
              t.__event.scroll.temScroll < t.__event.scroll.docScroll
                ? t.__event.scroll.homeScroll <= t.__event.scroll.docScroll &&
                  e.addClass("articleDirectoryFixed")
                : t.__event.scroll.homeScroll >= t.__event.scroll.docScroll &&
                  e.removeClass("articleDirectoryFixed");
            }),
            t.__event.resize.handle.push(() => {
              const e = parseFloat(document.body.clientWidth),
                l = $("#articleDirectory");
              if (l.length > 0) {
                let o = $("#home").outerWidth(!1),
                  n = l.outerWidth(!0),
                  i = (e - o) / 2,
                  a = i - n - 5,
                  s = $(".main-header").outerHeight();
                if ("left" === t.__config.articleDirectory.position)
                  l.css({
                    top: s + 5 + "px",
                    left: (a > 0 ? a : 5) + "px",
                    width: (i > 190 && i < 260 ? i - 10 : n) + "px",
                  });
                else
                  l.css({
                    top: s + 5 + "px",
                    right: (a > 0 ? a : 5) + "px",
                    width: (i > 190 && i < 260 ? i - 10 : n) + "px",
                  });
                e <= t.__config.articleDirectory.minBodyWeight || i <= 190
                  ? l.hide()
                  : l.show();
              }
            }),
            $("#articleDirectory .nav-link").click(function () {
              let e = $(':header[tid="' + $(this).attr("goto") + '"]');
              e.length && t.__tools.actScroll(e.offset().top + 3, 500);
            });
        }
        var a;
      }
    },
    8991: function (t, e, l) {
      function o(t) {
        return ((t) => {
          t = t.replace(/[\r\n]/g, "");
          let e = $("#digg_count"),
            l =
              t.match(
                /.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\(([0-9]*)\).*评论\s*\(([0-9]*)\).*推荐\s*\(([0-9]*)\).*/
              ) ||
              t.match(
                /.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\(([0-9]*)\).*评论\s*\(([0-9]*)\).*/
              ) ||
              t.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*/);
          return {
            date: void 0 === l[1] ? "1970-01-01 00:00" : l[1],
            vnum: void 0 === l[2] ? "0" : l[2],
            cnum: void 0 === l[3] ? "0" : l[3],
            tnum: void 0 === l[4] ? (e.length ? e.text() : "0") : l[4],
          };
        })(t);
      }
      l.d(e, {
        Z: function () {
          return o;
        },
      });
    },
    7401: function (t, e, l) {
      l.r(e),
        l.d(e, {
          default: function () {
            return d;
          },
        });
      var o = l(8991),
        n = l(6298);
      function i(t) {
        (() => {
          const e = $("#cb_post_title_url").text();
          t.__config.animate.articleTitle.enable
            ? (0, n.Z)(
                [e],
                "sbTitleText",
                "sbTitleConsole",
                ["#fff"],
                !1,
                t.__tools.setDomHomePosition
              )
            : $("#sbTitleText").text(e).css("color", "#fff"),
            $(".inner").css("max-width", "100vw"),
            t.__tools.setDomHomePosition();
        })(),
          $("#articleInfo").append('<p class="article-info-text"></p>'),
          (t.__timeIds.postDescTid = window.setInterval(() => {
            if (
              "..." !== $("#post_view_count").text() &&
              "..." !== $("#post_comment_count").text()
            ) {
              let e = $(".postDesc").show().text();
              $("#articleInfo p.article-info-text").html(
                (function (e) {
                  let l = (0, o.Z)(e),
                    n = $("#cnblogs_post_body").text().length;
                  return (
                '<span class="postMeta"><i class="simple-memory-iconfont simple-memory-icon-time1"></i>发表于 ' + l.date + '' +
                '<i class="simple-memory-iconfont simple-memory-icon-browse"></i>阅读：' + l.vnum + '' +
                '<i class="simple-memory-iconfont simple-memory-icon-interactive"></i>评论：' + l.cnum + '' +
                '<i class="simple-memory-iconfont simple-memory-icon-hot"></i>推荐：' + l.tnum + '' +
                '</span>'
                  );
                })(e)
              ),
                t.__tools.setDomHomePosition(),
                t.__tools.clearIntervalTimeId(t.__timeIds.postDescTid);
            }
          }, 1e3)),
          (t.__timeIds.articleInfoClassTId = window.setInterval(() => {
            let e = $("#BlogPostCategory").find("a");
            e.length > 0 &&
              (t.__tools.htmlReplace("#BlogPostCategory", /,/g, ""),
              t.__tools.articleInfo(e, 1),
              t.__tools.setDomHomePosition(),
              t.__tools.clearIntervalTimeId(t.__timeIds.articleInfoClassTId));
          }, 1e3)),
          (t.__timeIds.articleInfoTagTId = window.setInterval(() => {
            let e = $("#EntryTag").find("a");
            e.length > 0 &&
              (t.__tools.htmlReplace("#EntryTag", /,/g, ""),
              t.__tools.articleInfo(e, 2),
              t.__tools.setDomHomePosition(),
              t.__tools.clearIntervalTimeId(t.__timeIds.articleInfoTagTId));
          }, 1e3)),
          $(".blogpost-body p").html((t, e) =>
            /^\?&gt;/.test(e)
              ? '<p class="tip">' + e.slice(5).trim() + "</p>"
              : /^!&gt;/.test(e)
              ? '<p class="warn">' + e.slice(5).trim() + "</p>"
              : void 0
          ),
          (() => {
            let e = $("#cnblogs_post_body").find(":header");
            t.__config.articleContent.prefixIcon.enable &&
              e.length > 0 &&
              t.__tools
                .dynamicLoadingJs(
                  t.__config.articleContent.prefixIcon.options.link
                )
                .then((l) => {
                  let o =
                    t.__config.articleContent.prefixIcon.options.iconfontArr;
                  e.html((t, l) => {
                    let n = [],
                      i = Math.floor(Math.random() * (o.length - t) + t),
                      a = parseInt(e[t].tagName.replace(/H/g, ""));
                    -1 === n.indexOf(i) && 6 !== a
                      ? (n.push(i),
                        $(
                          '<svg class="simple-memory-symbol"> <use xlink:href="#icon-' +
                            o[i] +
                            '"></use></svg>'
                        ).prependTo(e[t]))
                      : t--;
                  });
                })
                .catch((t) => console.error("iconfont.js", t));
          })();
      }
      var a = l(2928);
      function s(t) {
        let e = () => {
            if (t.__config.animate.avatar.enable) {
              let t = $(".author_avatar"),
                e = $(".feedbackAvatar img");
              t.hasClass("img-rounded") ||
                t.addClass("img-rounded").css("border-radius", "50%"),
                e.hasClass("img-rounded") ||
                  e.addClass("img-rounded").css("border-radius", "50%");
            }
          },
          l = () => {
            let t = $(".feedbackItem");
            t.length > 0 &&
              ($.each(t, (e) => {
                let l = $(t[e]),
                  o = l.find(".feedbackCon"),
                  n = l.find(".feedbackListSubtitle"),
                  i = o.length ? o.find(".blog_comment_body") : [],
                  s = "",
                  r = i.length ? i.attr("id").split("_") : void 0;
                if (r && r.length > 0) {
                  let t = r[r.length - 1],
                    e = t.toString().match(/[0-9]/g);
                  $.isArray(e) && (t = e.join(""));
                  let o = $("#comment_" + t + "_avatar"),
                    n = o.length > 0 ? $.trim(o.text()) : a,
                    i = $("#a_comment_author_" + t);
                  (s =
                    '<div class="feedbackAvatar"><a href="' +
                    (i.length ? i.attr("href") : "javascropt:void(0);") +
                    '" target="_blank"><img src="' +
                    n +
                    '"/></a></div>'),
                    l.prepend(s);
                }
                n.length &&
                  n.find(".louzhu").length &&
                  n.addClass("feedbackListSubtitle-louzhu");
              }),
              $(t[0]).css("padding-top", "0"),
              $(t[t.length - 1]).css("padding-bottom", "0"),
              e());
          };
        (t.__timeIds.commentTId = window.setInterval(() => {
          $(".feedbackItem").length > 0 &&
            (l(), t.__tools.clearIntervalTimeId(t.__timeIds.commentTId));
        }, 1e3)),
          $(document).ajaxSuccess(function (o, n, i) {
            if (
              (i.url.includes("GetComments.aspx") &&
                (t.__tools.clearIntervalTimeId(t.__timeIds.commentTId), l()),
              i.url.includes("PostComment/Add.aspx") &&
                (() => {
                  let t = $(".comment_my_posted a").attr("href"),
                    l = $(".comment_my_posted a").text(),
                    o = $(".bq_post_comment").text(),
                    n = `<div class="feedbackItem" style="padding-bottom: 0px;">\n                        <div class="feedbackAvatar">\n                            <a href="${t}" target="_blank">\n                                <img src="${a}">\n                            </a>\n                        </div>\n                        <div class="feedbackListSubtitle ${
                      window.isBlogOwner && "feedbackListSubtitle-louzhu"
                    }">\n                            ${
                      window.isBlogOwner && '[<span class="louzhu">楼主</span>]'
                    }\n                            <span class="comment_date">${new Date()
                      .toLocaleString()
                      .replace(
                        /\//g,
                        "-"
                      )}</span>\n                            <a id="a_comment_author_5168811" href="${t}" target="_blank">${l}</a>\n                        </div>\n                        <div class="feedbackCon">\n                            <div id="comment_body_5168811" data-format-type="Markdown" class="blog_comment_body cnblogs-markdown">\n                                <p>${o}</p>\n                            </div>\n                        </div>\n                    </div>`;
                  $("#blog-comments-placeholder").append(n),
                    $(".comment_my_posted").remove(),
                    e();
                })(),
              i.url.includes("comment/DeleteComment.aspx"))
            ) {
              let t = JSON.parse(i?.data)?.commentId;
              $(`#comment_body_${t}`).parent().parent().remove(),
                $(".feedbackItem:last").css("padding-bottom", "0");
            }
            e();
          });
      }
      var r =
        '<span class="articleSuffix-flg"> <br><p class="essaySuffix-eof">__EOF__</p> <div id="articleSuffix"> <div class="articleSuffix-bg"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.78 155.96"> <path d="M10.5,99.81a1.9,1.9,0,0,0-.53-.09,1.66,1.66,0,0,0-1.64,1.65A1.64,1.64,0,0,0,10,103a1.57,1.57,0,0,0,.87-.25l26.76,26.82.45-1.08L11.52,101.91A1.65,1.65,0,0,0,10.5,99.81Zm-.13,2a.57.57,0,0,1-.8,0,.58.58,0,0,1-.17-.41.58.58,0,0,1,.57-.57h0a.57.57,0,0,1,.56.58A.55.55,0,0,1,10.37,101.77Z" style="fill:#c5c9e0"></path><path d="M56.15,117.58H39.06l0-.09a1.65,1.65,0,0,0-1.36-1H37.5a1.65,1.65,0,1,0,1.56,2.19H55.7L92.92,156h41.44v-1.08h-41Zm-18.25.94a.56.56,0,0,1-.79,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.56-.57h0a.58.58,0,0,1,.57.58A.54.54,0,0,1,37.9,118.52Z" style="fill:#c5c9e0"></path><path d="M23.52,50.32a1.65,1.65,0,0,0,1.55-1.11H55.28l48-48.13h31.06V0H102.85l-48,48.13H25.07a1.64,1.64,0,0,0-2.09-1,1.64,1.64,0,0,0,.54,3.2Zm0-2.21a.57.57,0,0,1,0,1.13.57.57,0,1,1,0-1.13Z" style="fill:#c5c9e0"></path><polygon points="102.86 0 102.86 0 102.86 0 102.86 0" style="fill:#c5c9e0"></polygon><path d="M107.72,12.14h26.64V11.07H107.27L57.4,61H3.09a1.66,1.66,0,0,0-1.45-.86H1.52A1.65,1.65,0,1,0,2.81,63a1.59,1.59,0,0,0,.45-.87H57.85ZM2.05,62.23a.57.57,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.56-.57h.09a.57.57,0,0,1,.32,1Z" style="fill:#c5c9e0"></path><path d="M134.36,43.22V42.14h-22.3l-9.62,9.63a1.64,1.64,0,0,0-2.19.77,1.61,1.61,0,0,0-.17.71,1.65,1.65,0,1,0,3.29,0,1.61,1.61,0,0,0-.16-.72l9.3-9.32Zm-32.64,10.6a.57.57,0,0,1,0-1.13.57.57,0,0,1,0,1.13Z" style="fill:#c5c9e0"></path><path d="M147,52.3l-9,9H111.48a1.64,1.64,0,0,0-1.61-1.33h-.14a1.65,1.65,0,1,0,1.6,2.41h27.19l9.26-9.29L147,52.3Zm-37.15,9.85a.56.56,0,0,1-.56-.57h0a.56.56,0,0,1,.56-.56h0a.57.57,0,1,1,0,1.13Z" style="fill:#c5c9e0"></path><path d="M66.79,75.35l11,11.06h56.53V85.33H78.27l-11-11.06H49.49L37.12,86.67a1.64,1.64,0,0,0-2.09,1,1.61,1.61,0,0,0-.09.54,1.65,1.65,0,0,0,3.29,0,1.68,1.68,0,0,0-.26-.89l12-12ZM36.58,88.79a.57.57,0,1,1,.57-.56A.57.57,0,0,1,36.58,88.79Z" style="fill:#c5c9e0"></path><path d="M110.61,95.55,92.8,113.4a1.62,1.62,0,1,0,.77.76l17.49-17.53h23.31V95.55ZM92.49,115.28a.56.56,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.57-.57h0a.58.58,0,0,1,.56.58A.55.55,0,0,1,92.49,115.28Z" style="fill:#c5c9e0"></path><path d="M97.89,122.3H76.62L64.2,109.85a1.65,1.65,0,0,0-.77-2.2,1.77,1.77,0,0,0-.72-.17h-.14a1.65,1.65,0,0,0,.15,3.29,1.58,1.58,0,0,0,.71-.17l12.74,12.77H98.34l17.48-17.52h18.54v-1.08h-19ZM63.12,109.53a.56.56,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,1.14,0A.54.54,0,0,1,63.12,109.53Z" style="fill:#c5c9e0"></path> </svg> </div> <div class="articleSuffix-left"> <img src="##imgUrl##"/> </div> <div class="articleSuffix-right"> <item> <li> <b>##origin##文作者：</b> <a href="##homeUrl##" target="_blank">##author##</a> </li> <li> <b>##origin##文链接：</b> <a href="##source##" target="_blank">##source##</a> </li> <li> <b>关于博主：</b> ##aboutHtml## </li> <li> <b>版权声明：</b> ##copyrightHtml## </li> <li> <b>声援博主：</b> ##supportHtml## </li> </item> </div> <div style="clear:both"></div> </div> </span>';
      var c = l(1087);
      function d(t) {
        t.__config.animate.articleBanner.enable &&
          l.e(5561).then(l.bind(l, 7715)),
          (() => {
            for (let t = 0; t <= 10; t++)
              setTimeout(function () {
                let t = $("#main");
                t.find(".cnblogs-markdown").removeClass("cnblogs-markdown"),
                  t.find(".cnblogs-post-body").removeClass("cnblogs-post-body");
              }, 500 * t);
          })(),
          i(t),
          "books" !== t.__status.pageType && (0, c.Z)(t),
          (function (t) {
            (t.__timeIds.greenChannelDiggTId = window.setInterval(() => {
              let e = $("#green_channel_digg");
              e.length &&
                (e.after(
                  '<button class="custom-btn btn-11" onclick="' +
                    e.attr("onclick") +
                    '">推荐该文<div class="dot"></div></button>'
                ),
                t.__tools.clearIntervalTimeId(t.__timeIds.greenChannelDiggTId));
            }, 1e3)),
              (t.__timeIds.greenChannelFollowTId = window.setInterval(() => {
                let e = $("#green_channel_follow");
                e.length &&
                  (e.after(
                    '<button class="custom-btn btn-12" onclick="' +
                      e.attr("onclick") +
                      '"><span>关注博主</span><span>关注博主</span></button>'
                  ),
                  t.__tools.clearIntervalTimeId(
                    t.__timeIds.greenChannelFollowTId
                  ));
              }, 1e3)),
              (t.__timeIds.greenChannelFavoriteTId = window.setInterval(() => {
                let e = $("#green_channel_favorite");
                e.length &&
                  (e.after(
                    '<button class="custom-btn btn-7" onclick="' +
                      e.attr("onclick") +
                      '"><span>收藏本文</span></button>'
                  ),
                  t.__tools.clearIntervalTimeId(
                    t.__timeIds.greenChannelFavoriteTId
                  ));
              }, 1e3)),
              (t.__timeIds.greenChannelWeiboTId = window.setInterval(() => {
                let e = $("#green_channel_weibo");
                e.length &&
                  (e.after(
                    '<button class="custom-btn btn-15" onclick="' +
                      e.attr("onclick") +
                      '">分享微博</button>'
                  ),
                  t.__tools.clearIntervalTimeId(
                    t.__timeIds.greenChannelWeiboTId
                  ));
              }, 1e3)),
              (t.__timeIds.greenChannelWechatTId = window.setInterval(() => {
                let e = $("#green_channel_wechat");
                e.length &&
                  (e.after(
                    '<button class="custom-btn btn-13" onclick="' +
                      e.attr("onclick") +
                      '">分享微信</button>'
                  ),
                  t.__tools.clearIntervalTimeId(
                    t.__timeIds.greenChannelWechatTId
                  ));
              }, 1e3));
          })(t),
          (function (t) {
            let e = t.__config.articleSuffix.imgUrl
                ? t.__config.articleSuffix.imgUrl
                : t.__config.info.avatar
                ? t.__config.info.avatar
                : a,
              l = $("#articleAuthor"),
              o = $("#articleSource"),
              n = l.length ? l.val() : t.__config.info.name,
              i = o.length ? o.val() : t.__status.url,
              s = o.length ? o.val() : t.__status.homeUrl,
              c = [
                ["origin", l.length || o.length ? "原" : "本"],
                ["imgUrl", e],
                ["homeUrl", s],
                ["author", n],
                ["source", i],
                [
                  "aboutHtml",
                  t.__config.articleSuffix.aboutHtml
                    ? t.__config.articleSuffix.aboutHtml
                    : '评论和私信会在第一时间回复。或者<a href="https://msg.cnblogs.com/msg/send/' +
                      t.__status.user +
                      '" target="_blank">直接私信</a>我。',
                ],
                [
                  "copyrightHtml",
                  t.__config.articleSuffix.copyrightHtml
                    ? t.__config.articleSuffix.copyrightHtml
                    : '本博客所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" alt="BY-NC-SA" title="BY-NC-SA" target="_blank">BY-NC-SA</a> 许可协议。转载请注明出处！',
                ],
                [
                  "supportHtml",
                  t.__config.articleSuffix.supportHtml
                    ? t.__config.articleSuffix.supportHtml
                    : '如果您觉得文章对您有帮助，可以点击文章右下角<strong><span style="color: #ff0000; font-size: 12pt;">【<a id="post-up" onclick="votePost(' +
                      t.__status.articleId +
                      ',\'Digg\')" href="javascript:void(0);">推荐</a>】</span></strong>一下。',
                ],
              ],
              d = t.__tools.batchTempReplacement(r, c);
            $("#cnblogs_post_body").append(d);
          })(t),
          s(t);
      }
    },
    6298: function (t, e, l) {
      function o(t, e, l, o, n, i) {
        void 0 === o && (o = ["#fff"]);
        let a = !0,
          s = document.getElementById(l),
          r = 1,
          c = 1,
          d = !1,
          m = document.getElementById(e);
        (s.innerHTML = "_"), m.setAttribute("style", "color:" + o[0]);
        let _ = window.setInterval(function () {
          if (0 === r && !1 === d)
            (d = !0),
              (m.innerHTML = t[0].substring(0, r)),
              window.setTimeout(function () {
                let e = o.shift();
                o.push(e);
                let l = t.shift();
                t.push(l),
                  (c = 1),
                  m.setAttribute("style", "color:" + o[0]),
                  (r += c),
                  (d = !1);
              }, 1e3);
          else if (n && r === t[0].length + 1 && !1 === d)
            (d = !0),
              window.setTimeout(function () {
                (c = -1), (r += c), (d = !1);
              }, 1e3);
          else if (!1 === d) {
            let e = t[0].substring(0, r);
            n || e !== t[0]
              ? ((m.innerHTML = t[0].substring(0, r)), (r += c))
              : window.clearInterval(_);
          }
          i && i();
        }, 180);
        window.setInterval(function () {
          !0 === a
            ? ((s.style.visibility = "hidden"), (a = !1))
            : ((s.style.visibility = "visible"), (a = !0));
        }, 400);
      }
      l.d(e, {
        Z: function () {
          return o;
        },
      });
    },
    2928: function (t, e, l) {
      t.exports = l.p + "images/53abc64338825f4038d6.webp";
    },
  },
]);
