import styled from "styled-components";
import {useEffect, useState} from "react";
import {FONT_FAMMILY} from "../../../../colorPallet";

export default function CarrerTags({tags, showAll}) {
    const [firstThreeTags, setFirstThreeTags] = useState([]);
    const [remainingTags, setRemainingTags] = useState([]);

    useEffect(() => {
        const firstThree = tags.slice(0, 3)
        if (tags.length > 3) {
            firstThree.push('...');
        }
        setFirstThreeTags(firstThree)
        setRemainingTags(tags.slice(3))
    }, []);

    return <CarrerTagDiv>
        {showAll
            ? tags.map((tag: string, index: number) => <CarrerTag tag={tag} remainingTags={remainingTags} key={index}/>)
            : firstThreeTags.map((tag: string, index: number) => <CarrerTag tag={tag} remainingTags={remainingTags}
                                                                            key={index}/>)
        }
    </CarrerTagDiv>
}

const CarrerTag = ({remainingTags, tag}: { remainingTags: string[], tag: string }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleSetTooltip = (set: boolean) => {
        if (tag !== '...') return;
        setShowTooltip(set)
    }

    return (
        <CarrerTagSpan
            onMouseEnter={() => handleSetTooltip(true)}
            onMouseLeave={() => handleSetTooltip(false)}
            cursorPointer={tag === '...'}
        >
            {tag}
            {showTooltip && <ToolTipDiv>...{<span>{remainingTags.join(', ')}</span>}</ToolTipDiv>}
        </CarrerTagSpan>
    );
};

const ToolTipDiv = styled.div`
  position: absolute;
  bottom: 20px;
  border: 1px solid #DCDCDC;
  border-radius: 5px;
  background: linear-gradient(rgba(221, 230, 250, 0.8) 0%, rgba(255, 255, 255, 0) 100%), rgb(242, 242, 242);
  width: auto;
  max-width: 300px;
  white-space: pre-wrap;
`

const CarrerTagSpan = styled.span`
  margin: 3px;
  cursor: default;
  position: relative;
  font-family: ${FONT_FAMMILY};
  font-weight: 700;
  ${(p) => p.cursorPointer ? 'cursor: pointer' : ''}
`

const CarrerTagDiv = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`