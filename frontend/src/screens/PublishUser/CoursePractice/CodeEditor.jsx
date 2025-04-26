import * as React from "react";

function CodeEditor(video) {
  const isIframe = video.VideoUrl?.includes("<iframe");

  return (
    <div className="flex flex-col flex-1 shrink px-2 basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col w-full bg-black min-h-[calc(100vh-200px)] max-md:max-w-full">
        {isIframe ? (
          <div
            className="flex items-center justify-center w-full h-full"
            dangerouslySetInnerHTML={{ __html: video.VideoUrl }}
          ></div>
        ) : (
          <video
            controls
            className="w-full h-full object-contain"
            src={video.VideoUrl}
          />
        )}
      </div>
    </div>
  );
}

export default CodeEditor;
