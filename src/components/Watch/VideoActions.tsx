import ReportModal from '@components/Common/VideoCard/ReportModal'
import ShareModal from '@components/Common/VideoCard/ShareModal'
import { Button } from '@components/UIElements/Button'
import { Mixpanel, TRACK } from '@utils/track'
import React, { FC, useState } from 'react'
import { FiFlag } from 'react-icons/fi'
import { RiShareForwardLine } from 'react-icons/ri'
import { TbHeartHandshake } from 'react-icons/tb'
import { LenstubePublication } from 'src/types/local'

import PublicationReaction from './PublicationReaction'
import TipModal from './TipModal'

type Props = {
  video: LenstubePublication
}

const VideoActions: FC<Props> = ({ video }) => {
  const [showShare, setShowShare] = useState(false)
  const [showReport, setShowReport] = useState(false)
  const [showTip, setShowTip] = useState(false)

  return (
    <div className="flex items-center justify-end mt-4 space-x-2.5 md:space-x-4 md:mt-0">
      <TipModal show={showTip} setShowTip={setShowTip} video={video} />
      <ShareModal video={video} show={showShare} setShowShare={setShowShare} />
      <ReportModal
        show={showReport}
        setShowReport={setShowReport}
        video={video}
      />

      <PublicationReaction publication={video} />
      <Button
        variant="secondary"
        className="!p-0"
        onClick={() => {
          Mixpanel.track(TRACK.TIP.OPEN)
          setShowTip(true)
        }}
      >
        <span className="flex items-center space-x-1">
          <TbHeartHandshake />
          <span>Tip</span>
        </span>
      </Button>
      <Button
        variant="secondary"
        className="!p-0"
        onClick={() => setShowShare(true)}
      >
        <span className="flex items-center space-x-1">
          <RiShareForwardLine />
          <span>Share</span>
        </span>
      </Button>
      <Button
        onClick={() => setShowReport(true)}
        variant="secondary"
        className="!p-0"
      >
        <span className="flex items-center space-x-1">
          <FiFlag className="text-xs" />
          <span>Report</span>
        </span>
      </Button>
    </div>
  )
}

export default VideoActions
