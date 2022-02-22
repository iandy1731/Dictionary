import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Result = () => {

    const word = useSelector(state => state.reducer.word);
    const data = useSelector(state => state.reducer.data);
    const err = useSelector(state => state.reducer.error);
    const isLoading = useSelector(state => state.reducer.isLoading);

    function playAudio() {
        let audio = new Audio(data[0].phonetics[0].audio || data[0].phonetics[1].audio);
        audio.play();
    }

    return (
        <div className="result__wraper">

            {isLoading &&
                <div>
                    <button class="result__spinner-button">
                        <span class="result__spinner"></span>
                        <span class="result__text">loading...</span>
                    </button>
                </div>
            }

            {!isLoading &&
                <div>
                    {(!err) ? (
                        <div className="result__body">
                            <div className="result__header">
                                <div className="result__request">Search Result - {word}</div>
                                <button className="result__button" onClick={() => { playAudio(); }}><VolumeUpIcon /> Play sound</button>
                            </div>
                            <div className="result__content">
                                {data.map(data =>
                                    <div className="result__data">
                                        <p className="result__item">Word: <span>{data.word}</span></p>
                                        {data.phonetic && <p className="result__item">Phonetic: <span>{data.phonetic}</span></p>}
                                        {data.origin && <p className="result__item">Origin: <span>{data.origin}</span></p>}
                                        {data.meanings && data.meanings.map(meaning =>
                                            <div>
                                                <p>Part of speech: <span>{meaning.partOfSpeech}</span></p>
                                                <p>Definitions: <span>{meaning.definitions.map(def =>
                                                    <p>Definition: <span><i>"{def.definition}"</i></span></p>
                                                )}</span></p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <button className="result__button"><NavLink to={`/`}><ArrowBackIosIcon />Back to search</NavLink></button>
                        </div>
                    ) : (
                        <div>
                            <div className="result__error">
                                <div className="container-floud">
                                    <div className="col-xs-12 ground-color text-center">
                                        <div className="container-error-404">
                                            <div className="clip"><div class="shadow"><span class="digit thirdDigit">4</span></div></div>
                                            <div className="clip"><div class="shadow"><span class="digit secondDigit">0</span></div></div>
                                            <div className="clip"><div class="shadow"><span class="digit firstDigit">4</span></div></div>
                                            <div className="msg">OH!<span class="triangle"></span></div>
                                        </div>
                                        <h2 className="h1">Sorry! Word is not found</h2>
                                    </div>
                                </div>
                            </div>
                            <button className="result__button"><NavLink to={`/`}><ArrowBackIosIcon />Back to search</NavLink></button>
                        </div>
                    )}
                </div>
            }
        </div>
    )
};

export default Result;




