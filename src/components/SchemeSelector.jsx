import { useEffect, useState } from 'react'

export default function ColorPicker ({ lightMode, colorSelection, handleChange, handleLightModeToggle }) {
  return (
    <header className='header'>
      <div className='picker'>
        <input
          className='picker__input picker__input-color'
          type='color'
          name='seedColor'
          onChange={handleChange}
          value={colorSelection.seedColor}
        />
        <select
          className='picker__input picker__mode'
          type='select'
          name='colorMode'
          onChange={handleChange}
          value={colorSelection.colorMode}
        >
          <option value='monochrome'>Monochrome</option>
          <option value='monochrome-dark'>Monochrome-Dark</option>
          <option value='monochrome-light'>Monochrome-Light</option>
          <option value='analogic'>Analogic</option>
          <option value='complement'>Complement</option>
          <option value='analogic-complement'>Analogic-Complement</option>
          <option value='triad'>Triad</option>
          <option value='quad'>Quad</option>
        </select>
        <label
          htmlFor='colorQuantity'
          className='picker__quantity-label'
        >Number of colors:
          <input
            id='colorQuantity'
            className='picker__input picker__quantity'
            type='number'
            name='colorQuantity'
            onChange={handleChange}
            min='1'
            max='5'
            placeholder='5'
            value={colorSelection.colorQuantity}
          />
        </label>
      </div>
      <div className='switch__container'>
        <span
          className={`switch__text ${!lightMode ? 'switch__text--none' : ''}`}
          style={{
            visibility: lightMode
              ? 'initial'
              : 'hidden'
          }}
        >Light Mode
        </span>
        <div className='switch__wrapper'>
          <label
            className='switch__label'
            htmlFor='switchInput'
          >
            <input
              type='checkbox'
              id='switchInput'
              checked={lightMode}
              onChange={handleLightModeToggle}
              className='switch__input'
            />
            <div
              className='switch__slider'
              style={
              lightMode
                ? { backgroundColor: colorSelection.seedColor }
                : {}
            }
            />
          </label>
        </div>
        <span className='switch__text' style={{ visibility: lightMode ? 'hidden' : 'initial' }}>Dark Mode</span>
      </div>
    </header>
  )
}
