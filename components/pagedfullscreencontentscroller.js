"use client";

import { useEffect } from "react";

import FullScreenContent from "./fullscreencontent";

export default function PagedFullScreenContentScroller({ contentIn }) {
    const SCROLL_TIMEOUT_DELAY = 627.5;

    var pagingDisabledForTouchscreenRunOnce = 0;
    var pagingDisabledForTouchscreen = false;

    var currentScrollIndex = 0;
    var lastScrollValue = 0;
    var contents = {};
    var canJump = true;

    function addContent(keyIn, valueIn) {
        var newContent = contents;
        newContent[keyIn] = valueIn;
        contents = newContent;
    }

    var i = 0;
    for (const content of contentIn) {
        const postId = "post" + i.toString();
        addContent(postId, <FullScreenContent
            key={postId}
            idIn={postId}
            titleIn={content.title}
            subTitleIn={content.subtitle}
            contentIn={content.content}
            backgroundImageSrcIn={content.image}
            shouldRenderAtBottom={content.bottom}
            shouldRenderOnRight={content.right}
            shouldUseDarkText={content.darkText}
        />);
        i++;
    }

    function updateScrollPosition(event) {
        const nextScrollValue = document.documentElement.scrollTop;
        const contentKeys = Object.keys(contents);
        const maxScrollIndex = contentKeys.length - 1;
        if (canJump) {
            if (nextScrollValue > lastScrollValue) {
                currentScrollIndex += 1;
                if (currentScrollIndex > maxScrollIndex) currentScrollIndex = maxScrollIndex;
            } else if (nextScrollValue < lastScrollValue) {
                currentScrollIndex -= 1;
                if (currentScrollIndex < 0) currentScrollIndex = 0;
            }
        }
        lastScrollValue = nextScrollValue;
    }

    function doContentJump(event) {
        const contentKeys = Object.keys(contents);
        const target = contentKeys[currentScrollIndex];
        try {
            document.getElementById(target).scrollIntoView({
                "behavior": "smooth"
            });
        } catch (e) {
        }
    }

    function onScrollEvent(event) {
        if (pagingDisabledForTouchscreen) return;
        updateScrollPosition(event);
        if (!canJump) return;
        canJump = false;
        setTimeout(function() { canJump = true; }, SCROLL_TIMEOUT_DELAY);
        doContentJump(event);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScrollEvent, { passive: false });
        if (pagingDisabledForTouchscreenRunOnce === 0) {
            pagingDisabledForTouchscreen = (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(pointer: none)').matches);
            pagingDisabledForTouchscreenRunOnce = 1;
        }
    }, []);
    return (
        <div id="contentRoot" className="h-fit w-[100vw] mb-[4px] flex flex-col justify-center content-center gap-[4px]">
            {Object.values(contents)}
        </div>
    );
}
