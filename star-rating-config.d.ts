import { starRatingSizes, starRatingSpeed, starRatingPosition, starRatingStarTypes, starRatingColor } from "./star-rating-struct";
/**
 * Configuration service for the StarRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the star ratings used in the application.
 */
export declare class StarRatingConfig {
    classEmpty: string;
    classHalf: string;
    classFilled: string;
    numOfStars: number;
    size: starRatingSizes;
    speed: starRatingSpeed;
    labelPosition: starRatingPosition;
    starType: starRatingStarTypes;
    assetsPath: string;
    svgPath: string;
    svgEmptySymbolId: string;
    svgHalfSymbolId: string;
    svgFilledSymbolId: string;
    svgPathEmpty: string;
    svgPathHalf: string;
    svgPathFilled: string;
    getColor(rating: number, numOfStars: number, staticColor?: starRatingColor): starRatingColor;
    getHalfStarVisible(rating: number): boolean;
}
