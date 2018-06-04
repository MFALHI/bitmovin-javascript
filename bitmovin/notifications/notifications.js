// @flow
import urljoin from 'url-join';

import http from '../utils/http';
import type {BitmovinConfiguration, HttpClient} from '../utils/types';

export type UserSpecificCustomData = {
  customData: ?Object
}

export type UserSpecificCustomDataDetails = {
  createdAt: string,
  modifiedAt: string,
  customData: Object
}

export const CONDITION_MEMBERS = {
  HEIGHT: 'HEIGHT',
  WIDTH: 'WIDTH',
  BITRATE: 'BITRATE',
  FPS: 'FPS',
  ASPECTRATIO: 'ASPECTRATIO',
  INPUTSTREAM: 'INPUTSTREAM',
  LANGUAGE: 'LANGUAGE',
  CHANNELFORMAT: 'CHANNELFORMAT',
  CHANNELLAYOUT: 'CHANNELLAYOUT',
  STREAMCOUNT: 'STREAMCOUNT',
  AUDIOSTREAMCOUNT: 'AUDIOSTREAMCOUNT',
  VIDEOSTREAMCOUNT: 'VIDEOSTREAMCOUNT',
  DURATION: 'DURATION'
};
export type ConditionMembers = $Keys<typeof CONDITION_MEMBERS>;

export const CONDITION_OPERATORS = {
  'LESS_THAN_OR_EQUAL': '<=',
  'LESS_THAN': '<',
  'GREATER_THAN': '>',
  'GREATER_THAN_OR_EQUAL': '>=',
  'EQUAL': '==',
  'UNEQUAL': '!='
};
export type ConditionOperators = $Keys<typeof CONDITION_OPERATORS>;

export type AbstractConditionConditionFirst = {
  attribute: ConditionMembers,
  operator: ConditionOperators,
  value: string
};

export const STREAM_CONDITION_MEMBERS = {
  BITRATE: 'BITRATE',
  CODEC: 'CODEC',
  FPS: 'FPS',
  HEIGHT: 'HEIGHT',
  WIDTH: 'WIDTH',
  MEDIA_TYPE: 'MEDIA_TYPE',
  STREAM_ID: 'STREAM_ID'
};
export type StreamConditionMembers = $Keys<typeof STREAM_CONDITION_MEMBERS>;

export type StreamCondition = {
  attribute: StreamConditionMembers,
  operator: ConditionOperators,
  value: string
} & AbstractConditionConditionFirst

export type AbstractConjunctionIsStreamCondition = {
  conditions: Array<StreamCondition>
}

export type EmailNotification = {
  emails: Array<string>,
  name: ?string,
  description: ?string
} & UserSpecificCustomData;

export type EmailNotificationResource = {
  id: string
} & UserSpecificCustomDataDetails

export type EmailNotificationWithConditions = {
  resolve: ?boolean,
  conditions: Array<AbstractConjunctionIsStreamCondition>
} & EmailNotification

export type EmailNotificationWithConditionsDetails = EmailNotificationWithConditions & EmailNotificationResource

export const notifications = (configuration: BitmovinConfiguration, http: HttpClient = http) => {
  const {get, post} = http;
  const notificationsBaseUrl = urljoin(configuration.apiBaseUrl, 'notifications');

  const list = (): Array<EmailNotificationWithConditionsDetails> => {
    const url = urljoin(notificationsBaseUrl, 'emails', 'encoding', 'encodings', 'live-input-stream-changed');

  };

  return {};
};

export default notifications;
