import React from 'react'
import {render} from '@testing-library/react'

import "@testing-library/jest-dom/extend-expect"

import Gist from '../components/Gist'
import MockGist from './fixtures/mockGist'

test('Gist renders correctly', ()=>{
const {getByTestId} = render(<Gist gist={MockGist} />)
const usernameEl = getByTestId("name")
expect(usernameEl.textContent).toBe(MockGist.owner.login)
})