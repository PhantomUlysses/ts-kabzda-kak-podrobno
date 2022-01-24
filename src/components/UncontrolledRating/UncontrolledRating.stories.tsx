import React, {useState} from "react";
import { action } from '@storybook/addon-actions';
import {UncontrolledRating, RatingValueType} from "./UncontrolledRating";

export default {
    title: 'components/UncontrolledRating',
    component: UncontrolledRating,
};

const callback = action('rating changed inside component');

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={callback} />;
export const EmptyRating1 = () => <UncontrolledRating defaultValue={1} onChange={callback} />;
export const EmptyRating2 = () => <UncontrolledRating defaultValue={2} onChange={callback} />;
export const EmptyRating3 = () => <UncontrolledRating defaultValue={3} onChange={callback} />;
export const EmptyRating4 = () => <UncontrolledRating defaultValue={4} onChange={callback} />;
export const EmptyRating5 = () => <UncontrolledRating defaultValue={5} onChange={callback} />;