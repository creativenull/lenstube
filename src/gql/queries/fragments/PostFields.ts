import { gql } from '@apollo/client'

import { CollectFields } from './CollectFields'
import { ProfileFields } from './ProfileFields'

export const PostFields = gql`
  fragment PostFields on Post {
    id
    reaction(request: $reactionRequest)
    profile {
      ...ProfileFields
    }
    collectedBy {
      address
      defaultProfile {
        handle
      }
    }
    referenceModule {
      __typename
    }
    canComment(profileId: $channelId) {
      result
    }
    canMirror(profileId: $channelId) {
      result
    }
    collectModule {
      ...CollectFields
    }
    collectNftAddress
    onChainContentURI
    hidden
    hasCollectedByMe
    stats {
      totalAmountOfComments
      totalAmountOfCollects
      totalAmountOfMirrors
      totalUpvotes
      totalDownvotes
    }
    metadata {
      name
      description
      content
      contentWarning
      mainContentFocus
      tags
      media {
        original {
          url
          mimeType
        }
      }
      cover {
        original {
          url
        }
      }
      attributes {
        value
        traitType
      }
    }
    createdAt
    appId
  }
  ${ProfileFields}
  ${CollectFields}
`
