/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.9.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import {
  BungieMembershipType,
  PagedQuery
} from '../common.js';
import {
  UserInfoCard
} from '../user/interfaces.js';

export const enum FireteamDateRange {
  All = 0,
  Now = 1,
  TwentyFourHours = 2,
  FortyEightHours = 3,
  ThisWeek = 4
}

export const enum FireteamPlatform {
  Unknown = 0,
  Playstation4 = 1,
  XboxOne = 2,
  Blizzard = 3,
  Steam = 4,
  Stadia = 5
}

export const enum FireteamPublicSearchOption {
  PublicAndPrivate = 0,
  PublicOnly = 1,
  PrivateOnly = 2
}

export const enum FireteamSlotSearch {
  NoSlotRestriction = 0,
  HasOpenPlayerSlots = 1,
  HasOpenPlayerOrAltSlots = 2
}

export interface SearchResultOfFireteamSummary {
  readonly results: FireteamSummary[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}

export interface FireteamSummary {
  readonly fireteamId: string;
  readonly groupId: string;
  readonly platform: FireteamPlatform;
  readonly activityType: number;
  readonly isImmediate: boolean;
  readonly scheduledTime?: string;
  readonly ownerMembershipId: string;
  readonly playerSlotCount: number;
  readonly alternateSlotCount?: number;
  readonly availablePlayerSlotCount: number;
  readonly availableAlternateSlotCount: number;
  readonly title: string;
  readonly dateCreated: string;
  readonly dateModified?: string;
  readonly isPublic: boolean;
  readonly locale: string;
  readonly isValid: boolean;
  readonly datePlayerModified: string;
  readonly titleBeforeModeration: string;
}

export interface SearchResultOfFireteamResponse {
  readonly results: FireteamResponse[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}

export interface FireteamResponse {
  readonly Summary: FireteamSummary;
  readonly Members: FireteamMember[];
  readonly Alternates: FireteamMember[];
}

export interface FireteamMember {
  readonly destinyUserInfo: FireteamUserInfoCard;
  readonly bungieNetUserInfo: UserInfoCard;
  readonly characterId: string;
  readonly dateJoined: string;
  readonly hasMicrophone: boolean;
  readonly lastPlatformInviteAttemptDate: string;
  readonly lastPlatformInviteAttemptResult: FireteamPlatformInviteResult;
}

export interface FireteamUserInfoCard {
  readonly FireteamDisplayName: string;
  readonly FireteamMembershipType: BungieMembershipType;
  readonly FireteamPlatformProfileUrl: string;
  readonly FireteamPlatformUniqueIdentifier: string;
  /**
   * A platform specific additional display name - ex: psn Real Name, bnet Unique
   * Name, etc.
   */
  readonly supplementalDisplayName: string;
  /** URL the Icon if available. */
  readonly iconPath: string;
  /**
   * If there is a cross save override in effect, this value will tell you the type
   * that is overridding this one.
   */
  readonly crossSaveOverride: BungieMembershipType;
  /**
   * The list of Membership Types indicating the platforms on which this Membership
   * can be used.
   *
   * Not in Cross Save = its original membership type. Cross Save Primary = Any
   * membership types it is overridding, and its original membership type Cross Save
   * Overridden = Empty list
   */
  readonly applicableMembershipTypes: BungieMembershipType[];
  /** If True, this is a public user membership. */
  readonly isPublic: boolean;
  /** Type of the membership. Not necessarily the native type. */
  readonly membershipType: BungieMembershipType;
  /** Membership ID as they user is known in the Accounts service */
  readonly membershipId: string;
  /**
   * Display Name the player has chosen for themselves. The display name is optional
   * when the data type is used as input to a platform API.
   */
  readonly displayName: string;
}

export const enum FireteamPlatformInviteResult {
  None = 0,
  Success = 1,
  AlreadyInFireteam = 2,
  Throttled = 3,
  ServiceError = 4
}
