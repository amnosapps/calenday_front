"use client";

import Image from 'next/image';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Container, NavWrapper, ContentWrapper, SchedulesWrapper, Schedule, FooterWrapper } from './style';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    api.get("/schedule/schedules")
      .then((resp) => setSchedules(resp.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [])

  const buttonSymbol = "<"

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push("/schedules/create")
  }

  return (
    <Container className="">
      <NavWrapper>
        <button>{buttonSymbol}</button>
        <h1 className="pageTitle">Agendamentos</h1>
        <div className="profile">
          <img src="profile.jpg" alt="profile" width={40} />
        </div>
      </NavWrapper>
      <ContentWrapper>
        <div className="calendarWrapper">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar/>
          </LocalizationProvider>
        </div>
        <SchedulesWrapper>
          <h1 className="scheduleTitle">Próximos compromissos</h1>
          {schedules.map((schedule: any) => (
            <Schedule>
                <div className='scheduleHour'>
                  <h1>13:30</h1>
                </div>
                <div className="scheduleContent">
                  <div>
                    <h1 className="scheduleGuest">{schedule.guest}</h1>
                    <h1>{schedule.service}</h1>
                  </div>
                </div>
            </Schedule>
          ))}
        </SchedulesWrapper>
      </ContentWrapper>
      <FooterWrapper>
        <button className="scheduleButton" onClick={handleClick}>+ Agendar</button>
      </FooterWrapper>
    </Container>
  )
}
