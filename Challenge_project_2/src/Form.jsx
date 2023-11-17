import React from 'react';
import Button from './Button';

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <div>
            <Button 
                value='users'
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button 
                value='comments'
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button 
                value='posts'
                reqType={reqType}
                setReqType={setReqType}
            />
        </div>
    </form>
  )
}

export default Form;