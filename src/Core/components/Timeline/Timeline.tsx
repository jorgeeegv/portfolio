import React, { ReactNode, useEffect, useState } from 'react';
import './Timeline.css';
import TimelineSrv from '../../../Services/TimelineSrv';
import { Timeline as TimelineModel } from "../../../Models/Timeline";

export default function Timeline() {
    const [loading, setLoading] = useState<Boolean>(true);
    const [timeLines, setTimelines] = useState<TimelineModel[]>([]);
    const [timeLineSelected, setTimeline] = useState<TimelineModel>({});
    const [slideIn, setSlideInAnimation] = useState<boolean>(false);

    useEffect(() => {
        setTimelines(TimelineSrv.getTimeLines());
        setLoading(false)
    }, [])

    useEffect(() => {
        setTimeline(timeLines[timeLines.length - 1])
    }, [timeLines])

    useEffect(() => {
        setSlideInAnimation(true)
    }, [timeLineSelected])


    const selectTimeline =  (timeline: React.SetStateAction<TimelineModel>) => {
        setSlideInAnimation(false);
        setTimeline(timeline)
    }

    return (
        <div className="flex w-full my-40">
            <div className="flex flex-col w-full justify-center items-center lg:gap-20">
                <div className="text-3xl p-5 lg:p-0 font-bold color-primary">CARRERA</div>
                <div className="flex flex-row gap-y-20 lg:flex-row w-full justify-start lg:justify-center items-center y-20 grid grid-cols-5 grid-rows-none	 lg:grid-cols-1 grid-rows-2">
                    {loading ? <span className='col-auto'></span> : ''}
                    {
                        (timeLines && timeLines.length > 0) ? (
                            <React.Fragment>
                                <div className='col-span-1 flex flex-col lg:flex-row w-full justify-center items-center lg:justify-center'>
                                    {
                                        timeLines.map((timeline, index) => {
                                            return (
                                                <React.Fragment>
                                                    <div className={"dot text-center " + ((timeLineSelected === timeline) ? 'dot-selected' : '')}
                                                        onClick={() => { selectTimeline(timeline) }}><span className='text-base	 color-white font-semibold'>{timeline.from}</span></div>
                                                    {(index < (timeLines.length - 1)) ? <div className="line"></div> : ''}
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                                <div className='w-full h-full col-span-4 flex flex-row justify-center items-center'>
                                    {timeLineSelected ? 
                                        (<div className={'flex flex-col gap-y-3 justify-center items-center timeline-card' + (slideIn ? ' animate-timeline-card' : '')}
                                         
                                        >
                                            <span className='text-2xl text-center lg:text-start font-bold'>{timeLineSelected.title}</span>
                                            <div className='flex flex-col justify-center items-center'>
                                                <span className='text-1xl font-semibold italic'>{timeLineSelected.subtitle}</span>
                                                <span className='text-1xl font-semibold italic'>{timeLineSelected.from + ' - ' + timeLineSelected.to}</span>
                                            </div>
                                            <span className='text-1xl font-semibold subtitle-text text-center lg:text-start'>{timeLineSelected.content}</span>
                                        </div>) : ''
                                    }
                                </div>
                            </React.Fragment>
                        ) : ''
                    }

                </div>
            </div>
        </div>
    )
}

// function setAnimation(){
//     debugger
//     const timelinecard = document.querySelector('.timeline-card');
//     if(timelinecard?.classList.contains('animation-right-2')) timelinecard.classList.remove('animation-right-2');
//     // timelinecard?.classList.add('animation-right-2');
// }