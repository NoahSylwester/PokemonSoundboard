import React, { Component } from 'react';
import Sound from '../Sound/Sound';
import { Howl } from 'howler';
import './index.css';

import a from '../../sounds/A meaningless splash.wav'
import b from '../../sounds/Ahhh.wav'
import c from '../../sounds/An exchange of heavy hits started the fight.wav'
import d from '../../sounds/An intimidating glare.wav'
import e from '../../sounds/Bone club it down.wav'
import f from '../../sounds/Both Pokémon appear equally fit.wav'
import g from '../../sounds/Both Pokémon are exhausted.wav'
import h from '../../sounds/Dig this.wav'
import i from '../../sounds/Fireworks are flying in this battle.wav'
import j from '../../sounds/Give it a licky.wav'
import k from '../../sounds/Gone, it\'s a one-hit wonder.wav'
import l from '../../sounds/Here comes a barrage.wav'
import m from '../../sounds/Is there nothing you can do now.wav'
import n from '../../sounds/It opted to slowly damage the opponent.wav'
import o from '../../sounds/It suffered a burn.wav'
import p from '../../sounds/It used recover.wav'
import q from '../../sounds/It used self-destruct.wav'
import r from '../../sounds/It\'s a head-on collision of power vs. power.wav'
import s from '../../sounds/It\'s trying to minimize its size.wav'
import t from '../../sounds/Its rage is unleashed.wav'
import u from '../../sounds/Oh, a horrible screech.wav'
import v from '../../sounds/Oh, it\'s down.wav'
import w from '../../sounds/Oh, what a lovely kiss.wav'
import x from '../../sounds/POW That\'s an effective hit.wav'
import y from '../../sounds/Right from the start the power difference is obvious.wav'
import z from '../../sounds/Soft-boiled, over easy.wav'
import aa from '../../sounds/Struggle.wav'
import bb from '../../sounds/That was brutal.wav'
import cc from '../../sounds/That was weak.wav'
import dd from '../../sounds/The attack is still continuing.wav'
import ee from '../../sounds/The attack wasn\'t effective.wav'
import ff from '../../sounds/The crowd\'s excitement is building over this hot battle.wav'
import gg from '../../sounds/The intense battle continues.wav'
import hh from '../../sounds/The move failed.wav'
import ii from '../../sounds/The trainer hasn\'t issued an order.wav'
import jj from '../../sounds/There\'re just trading warning blows now.wav'
import kk from '../../sounds/There\'s a big difference in HP.wav'
import ll from '../../sounds/There, quick attack.wav'
import mm from '../../sounds/They\'re staring each other down.wav'
import nn from '../../sounds/This has turned into a lopsided contest.wav'
import oo from '../../sounds/This is a battle between obviously mis-matched Pokémon.wav'
import pp from '../../sounds/This is a wild one from the word "go".wav'
import qq from '../../sounds/What a furious battle.wav'
import rr from '../../sounds/What\'s the matter, trainer.wav'
import ss from '../../sounds/Will it erase the humiliation of its fallen comrade.wav'
import tt from '../../sounds/Yeah, it\'s a hit.wav'
import uu from '../../sounds/Drilled that weak spot.wav'
import vv from '../../sounds/Taken down on the word "go".wav'
import ww from '../../sounds/Both Pokémon appear weak.wav'
import xx from '../../sounds/Wahh, taken down with one hit.wav'
import yy from '../../sounds/It took the abuse easily.wav'
import zz from '../../sounds/No, this Pokémon looks wrong.wav'
import aaa from '../../sounds/That\'s a good hit.wav'
import bbb from '../../sounds/It didnt work.wav'
import ccc from '../../sounds/We might be in for a one-sided affair.wav'
import ddd from '../../sounds/Wow, they\'re down, they\'re both down.wav'
import eee from '../../sounds/Down, the level disadvantage is obvious.wav'
import fff from '../../sounds/Oh, another failure.wav'
import ggg from '../../sounds/A light tap decided the outcome.wav'
import hhh from '../../sounds/Oooh, it was casually cast aside.wav'
import iii from '../../sounds/The combatants face each other.wav'

const sounds = {
    ['A meaningless splash']: a,
    ['Ahhh']: b,
    ['An exchange of heavy hits started the fight']: c,
    ['An intimidating glare']: d,
    ['Bone club it down']: e,
    ['Both Pokémon appear equally fight']: f,
    ['Both Pokémon are exhausted']: g,
    ['Dig this']: h,
    ['Fireworks are flying in this battle']: i,
    ['Give it a licky']: j,
    ['Gone, it\'s a one-hit wonder.wav']: k,
    ['Here comes a barrage']: l,
    ['Is there nothing you can do now?']: m,
    ['It opted to slowly damage the opponent']: n,
    ['It suffered a burn']: o,
    ['It used recover']: p,
    ['It used self-destruct']: q,
    ['It\'s a head-on collision of power vs. power']: r,
    ['It\'s trying to minimize its size']: s,
    ['Its rage is unleashed']: t,
    ['Oh, a horrible screech']: u,
    ['Oh, it\'s down']: v,
    ['Oh, what a lovely kiss']: w,
    ['POW That\'s an effective hit']: x,
    ['Right from the start the power difference is obvious']: y,
    ['Soft-boiled, over easy']: z,
    ['Struggle']: aa,
    ['That was brutal']: bb,
    ['That was weak']: cc,
    ['The attack is still continuing']: dd,
    ['The attack wasn\'t effective']: ee,
    ['The crowd\'s excitement is building over this hot battle']: ff,
    ['The intense battle continues']: gg,
    ['The move failed']: hh,
    ['The trainer hasn\'t issued an order']: ii,
    ['There\'re just trading warning blows now']: jj,
    ['There\'s a big difference in HP']: kk,
    ['There, quick attack']: ll,
    ['They\'re staring each other down']: mm,
    ['This has turned into a lopsided contest']: nn,
    ['This is a battle between obviously mis-matched Pokémon']: oo,
    ['This is a wild one from the word "go"']: pp,
    ['What a furious battle']: qq,
    ['What\'s the matter, trainer']: rr,
    ['Will it erase the humiliation of its fallen comrade']: ss,
    ['Yeah, it\'s a hit']: tt,
    ['Drilled that weak spot']: uu,
    ['Taken down on the word "go"']: vv,
    ['Both Pokémon appear weak']: ww,
    ['Wahh, taken down with one hit']: xx,
    ['It took the abuse easily']: yy,
    ['No, this Pokémon looks wrong']: zz,
    ['That\'s a good hit']: aaa,
    ['It didnt work']: bbb,
    ['We might be in for a one-sided affair']: ccc,
    ['Wow, they\'re down, they\'re both down']: ddd,
    ['Down, the level disadvantage is obvious']: eee,
    ['Oh, another failure']: fff,
    ['A light tap decided the outcome']: ggg,
    ['Oooh, it was casually cast aside']: hhh,
    ['The combatants face each other']: iii,
 };  

 console.log()


class Board extends Component {
    constructor() {
        super();
        this.state = {
            soundIds: [],
        };
    }

    soundsSorted = Object.keys(sounds).sort()

    render() {
        return (
            <div className="Board">
                <h1>Pokémon Stadium Announcer</h1>
                <div className="soundContainer">
                    <div>{this.soundsSorted.slice(0,this.soundsSorted.length/4).map((key) => <Sound name={[key]} sound={new Howl({ src: sounds[key]})} />)}</div>
                    <div>{this.soundsSorted.slice(this.soundsSorted.length/4,this.soundsSorted.length/2).map((key) => <Sound name={[key]} sound={new Howl({ src: sounds[key]})} />)}</div>
                    <div>{this.soundsSorted.slice(this.soundsSorted.length/2,this.soundsSorted.length * (3/4)).map((key) => <Sound name={[key]} sound={new Howl({ src: sounds[key]})} />)}</div>
                    <div>{this.soundsSorted.slice(this.soundsSorted.length * (3/4),this.soundsSorted.length).map((key) => <Sound name={[key]} sound={new Howl({ src: sounds[key]})} />)}</div>
                </div>
            </div>
        )
    }
}

export default Board;