import { SurveyDto } from '../dto/create-survey.dto';
import { SurveysService } from '../services/surveys.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('surveys')
export class SurveysController {
  constructor(private readonly surveysService: SurveysService) {}

  // 설문지 목록조회
  @Get()
  async getSurveys() {
    const surveys = await this.surveysService.getSurveys();
    return surveys;
  }

  // 설문지 상세조회
  @Get('/:surveyId')
  async getSurveyById(@Param('surveyId') surveyId: number) {
    const survey = await this.surveysService.getSurveyById(surveyId);
    return survey;
  }

  // 설문지 생성
  @Post()
  async createSurvey(@Body() surveyDto: SurveyDto) {
    const create = await this.surveysService.createSurvey(surveyDto);
    return create;
  }

  // 설문지 수정
  @Patch('/:surveyId')
  async updateSurvey(
    @Param('surveyId') surveyId: number,
    @Body() surveyDto: SurveyDto,
  ) {
    const update = await this.surveysService.updateSurvey(surveyDto, surveyId);
    return update;
  }

  // 설문지 삭제
  @Delete('/:surveyId')
  async deleteSurvey(@Param('surveyId') surveyId: number) {
    const remove = this.surveysService.deleteSurvey(surveyId);
    return remove;
  }
}
